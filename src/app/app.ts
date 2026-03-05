import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App implements OnInit {

  subscriptions: any[] = [];

  newSubscription = {
    name: '',
    price: 0,
    billingCycle: 'monthly',
    nextPayment: ''
  };

  ngOnInit() {
    const data = localStorage.getItem('subscriptions');

    if (data) {
      this.subscriptions = JSON.parse(data);
    }
  }

  addSubscription() {

    this.subscriptions.push({ ...this.newSubscription });

    localStorage.setItem(
      'subscriptions',
      JSON.stringify(this.subscriptions)
    );

    this.newSubscription = {
      name: '',
      price: 0,
      billingCycle: 'monthly',
      nextPayment: ''
    };

  }

}
