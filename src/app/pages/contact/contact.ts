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
  sent      = signal(false);
  loading   = signal(false);
  errorMsg  = signal('');
  showModal = signal(false);  // Control privacy modal visibility

  msg = {
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    subject:   '',
    message:   '',
  };

  private pendingSend = false; // Flag to track if send was triggered

  private readonly API = 'https://formapi.soficopharm.net/api/Enquiry';

  constructor(private http: HttpClient) {}

  /** Validate form fields */
  private validateForm(): boolean {
    this.errorMsg.set('');

    if (!this.msg.firstName || !this.msg.email || !this.msg.message) {
      this.errorMsg.set('Please fill in all required fields (First Name, Email, Message).');
      return false;
    }
    return true;
  }

  /** Called when user clicks "Send Message" */
  send(): void {
    if (!this.validateForm()) {
      return;
    }

    // Show privacy modal instead of sending directly
    this.showModal.set(true);
    this.pendingSend = true;
  }

  /** Called when user agrees to privacy terms */
  agree(): void {
    this.showModal.set(false);
    if (this.pendingSend) {
      this.submitEnquiry();
      this.pendingSend = false;
    }
  }

  /** Called when user declines privacy terms */
  decline(): void {
    this.showModal.set(false);
    this.pendingSend = false;
  }

  /** Actually submit the enquiry to the API */
  private submitEnquiry(): void {
    this.loading.set(true);
    this.errorMsg.set('');

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
        // Show success toast notification (optional)
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