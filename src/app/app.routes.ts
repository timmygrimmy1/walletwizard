import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Subscriptions } from './pages/subscriptions/subscriptions';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'subscriptions', component: Subscriptions }
];
