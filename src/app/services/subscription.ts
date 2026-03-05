import { Injectable } from '@angular/core';
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private storageKey = 'walletwizard_subscriptions';

  subscriptions: Subscription[] = [];

  constructor() {
    this.load();
  }

  load() {
    const data = localStorage.getItem(this.storageKey);

    if (data) {
      this.subscriptions = JSON.parse(data);
    }
  }

  save() {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this.subscriptions)
    );
  }

  add(sub: Subscription): void {
    this.subscriptions.push(sub);
    this.save();
  }

  getAll(): Subscription[] {
    return this.subscriptions;
  }

  getMonthlyCost() {
    let total = 0;

    for (const sub of this.subscriptions) {
      if (sub.billingCycle === 'monthly') {
        total += sub.price;
      } else {
        total += sub.price / 12;
      }
    }

    return total;
  }

  remove(index: number) {
    this.subscriptions.splice(index, 1);
    this.save();
  }

  getNextPayment(): Subscription | null {

    if (this.subscriptions.length === 0) {
      return null;
    }

    const sorted = [...this.subscriptions].sort((a, b) => {
      return new Date(a.nextPayment).getTime() - new Date(b.nextPayment).getTime();
    });

    return sorted[0];

  }

}
