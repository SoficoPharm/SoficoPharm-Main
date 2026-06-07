import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  sent     = signal(false);
  loading  = signal(false);
  errorMsg = signal('');

  msg = {
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    subject:   '',
    message:   '',
  };

  private readonly API = 'https://formapi.soficopharm.net/api/Enquiry';

  constructor(private http: HttpClient) {}

  send(): void {
    this.errorMsg.set('');

    if (!this.msg.firstName || !this.msg.email || !this.msg.message) {
      this.errorMsg.set('Please fill in all required fields (First Name, Email, Message).');
      return;
    }

    this.loading.set(true);

    const payload = {
      firstName: this.msg.firstName,
      lastName:  this.msg.lastName,
      email:     this.msg.email,
      phone:     this.msg.phone,
      subject:   this.msg.subject || 'General Inquiry',
      message:   this.msg.message,
    };

    this.http.post(this.API, payload).subscribe({
      next: () => {
        this.loading.set(false);
        this.sent.set(true);
        this.msg = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };
      },
      error: (err) => {
        this.loading.set(false);
        if (err.status === 0) {
          this.errorMsg.set('Could not reach the server. Please try again or call us on 16556.');
        } else {
          this.errorMsg.set(`Error ${err.status}: Please try again or contact us directly on 16556.`);
        }
      },
    });
  }
}