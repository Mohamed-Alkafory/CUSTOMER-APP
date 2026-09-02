import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.module';
import { CustomerService } from '../../services/customer';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-edit',
  imports: [
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './customer-edit.html',
  styleUrl: './customer-edit.css',
})
export class CustomerEdit implements OnInit {
  private customerService = inject(CustomerService);
  private cdr = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);

  form!: FormGroup;
  router = inject(Router);
  customer!: Customer;
  customerID!: string;
  isLoading = true;

  ngOnInit(): void {
    this.customerID = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
    });
    if (this.customerID) {
      this.isLoading = true;
      this.customerService.getById(this.customerID).subscribe({
        next: (data) => {
          this.customer = data;
          this.form.patchValue(data);
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.isLoading = false;
          console.log(error);
          this.cdr.detectChanges();
        },
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.customerService.put(this.customerID, this.form.value).subscribe({
        next: (data) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
