export interface Subscription {
  name: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  important: boolean;
  nextPayment: string;
}
