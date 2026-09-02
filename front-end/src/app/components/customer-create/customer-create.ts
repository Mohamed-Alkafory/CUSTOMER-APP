import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer';

@Component({
  selector: 'app-customer-create',
  imports: [
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './customer-create.html',
  styleUrl: './customer-create.css',
})
export class CustomerCreate implements OnInit {
  form!: FormGroup;
  router = inject(Router);

  private customerService = inject(CustomerService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.customerService.post(this.form.value).subscribe({
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
