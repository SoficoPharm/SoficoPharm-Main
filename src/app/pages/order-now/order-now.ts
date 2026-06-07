import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-now',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-now.html',
  styleUrl: './order-now.scss'
})
export class OrderNowComponent {
  submitted = signal(false);

  order = {
    fullName: '', company: '', phone: '',
    email: '', category: '', details: '', location: ''
  };

  submit() {
    if (this.order.fullName && this.order.phone && this.order.email) {
      this.submitted.set(true);
      this.order = { fullName:'', company:'', phone:'', email:'', category:'', details:'', location:'' };
    }
  }
}