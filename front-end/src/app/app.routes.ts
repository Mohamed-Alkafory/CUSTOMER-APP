import { Routes } from '@angular/router';

import { CustomerList } from './components/customer-list/customer-list';
import { CustomerCreate } from './components/customer-create/customer-create';
import { CustomerEdit } from './components/customer-edit/customer-edit';
import { CustomerDetails } from './components/customer-details/customer-details';

export const routes: Routes = [
  {
    path: '',
    component: CustomerList,
  },
  {
    path: 'create',
    component: CustomerCreate,
  },
  {
    path: 'edit/:id',
    component: CustomerEdit,
  },
  {
    path: 'details/:id',
    component: CustomerDetails,
  },
];
