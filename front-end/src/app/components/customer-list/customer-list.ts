import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customer';
import { Customer } from '../../models/customer.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  imports: [MatButtonModule, RouterLink, CommonModule, MatIconModule, FormsModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList implements OnInit {
  private customerService = inject(CustomerService);
  private cdr = inject(ChangeDetectorRef);

  customers: Customer[] = [];
  isLoading = true;
  searchTerm = '';

  /** Avatar color palette — picked by first character code */
  private readonly avatarColors = [
    '#2563eb', '#7c3aed', '#db2777',
    '#059669', '#d97706', '#0891b2', '#dc2626',
  ];

  get filteredCustomers(): Customer[] {
    if (!this.searchTerm.trim()) return this.customers;
    const term = this.searchTerm.toLowerCase().trim();
    return this.customers.filter(
      (c) =>
        c.name?.toLowerCase().includes(term) ||
        c.email?.toLowerCase().includes(term) ||
        c.phone?.toLowerCase().includes(term)
    );
  }

  getAvatarColor(name: string): string {
    const index = (name?.charCodeAt(0) ?? 0) % this.avatarColors.length;
    return this.avatarColors[index];
  }

  getInitial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : '?';
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.customerService.get().subscribe({
      next: (data) => {
        this.customers = data;
        this.isLoading = false;
        console.log(this.customers);
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
        this.cdr.detectChanges();
      },
    });
  }

  onDeleteClick(customer: Customer): void {
    if (window.confirm('Are you sure you want to delete ' + customer.name + '?')) {
      this.customerService.delete(customer._id).subscribe({
        next: (data) => {
          console.log(data);
          this.ngOnInit();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
