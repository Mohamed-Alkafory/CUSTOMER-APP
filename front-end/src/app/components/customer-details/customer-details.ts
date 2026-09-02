import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer } from '../../models/customer.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customer-details',
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.css',
})
export class CustomerDetails implements OnInit {
  private customerService = inject(CustomerService);
  private cdr = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);

  customer!: Customer;
  customerID!: string;
  isLoading = true;

  /** Avatar color palette */
  private readonly avatarColors = [
    '#2563eb', '#7c3aed', '#db2777',
    '#059669', '#d97706', '#0891b2', '#dc2626',
  ];

  getAvatarColor(name: string): string {
    const index = (name?.charCodeAt(0) ?? 0) % this.avatarColors.length;
    return this.avatarColors[index];
  }

  getInitial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : '?';
  }

  ngOnInit(): void {
    this.customerID = this.route.snapshot.params['id'];
    console.log(this.customerID);
    if (this.customerID) {
      this.isLoading = true;
      this.customerService.getById(this.customerID).subscribe({
        next: (data) => {
          this.customer = data;
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
}
