import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubscriptionService } from '../../services/subscription';
import { Subscription } from '../../models/subscription';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subscriptions.html',
  styleUrl: './subscriptions.less'
})
export class Subscriptions {

  constructor(public subService: SubscriptionService) {}

  newSubscription: Subscription = {
    name: '',
    price: 0,
    billingCycle: 'monthly',
    important: false,
    nextPayment: ''
  };

  addSubscription(form: NgForm): void {
    if (form.invalid) {
      // sorgt dafür, dass die Bubbles auch wirklich erscheinen
      form.control.markAllAsTouched();
      return;
    }

    this.subService.add({ ...this.newSubscription });

    // Reset: Formular + Objekt zurücksetzen
    form.resetForm({
      billingCycle: 'monthly',
      important: false
    });
  }


}
