import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  id: number;
  name: string;
  desc: string;
  img: string;
  features: string[];
}

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent implements AfterViewInit {
  selectedService: Service | null = null;

  @ViewChildren('statNumber') statElements!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef<HTMLElement>>;

  stats: Stat[] = [
    { value: 70, label: 'Years of Experience', suffix: '+' },
    { value: 1500, label: 'Employees', suffix: '+' },
    { value: 32000, label: 'Customers', suffix: '+' },
    { value: 500, label: 'Sales Representatives', suffix: '+' },
    { value: 450, label: 'Vehicles', suffix: '+' },
    { value: 25, label: 'Warehouse Space', suffix: 'K SQM' },
  ];

  services: Service[] = [
    {
      id: 1,
      name: 'Registration',
      desc: 'With our extensive list of partners and their various products, over the last forty years we have formed a specialized team that is responsible solely for registration and importation plans for our partner products. An organized process takes place within our logistics department to streamline the registration for our partner products so that we can fast track the process efficiently.',
      img: 'assets/images/rg.jpg',
      features: [
        'Fast-track registration process',
        'Expert regulatory team',
        'Ministry of Health compliance',
        'Streamlined documentation'
      ]
    },
    {
      id: 2,
      name: 'Importation',
      desc: 'Our importation division handles the full spectrum of pharmaceutical imports — from securing necessary approvals and managing international logistics to ensuring compliance with all regulatory requirements. We maintain strong relationships with international partners and customs authorities to ensure smooth and timely delivery of all products.',
      img: 'assets/images/importation.jpg',
      features: [
        'Full importation management',
        'Customs clearance expertise',
        'International logistics',
        'Regulatory compliance'
      ]
    },
    {
      id: 3,
      name: 'Distribution',
      desc: 'With years of experience and a highly capable team we offer turnkey services that begin with market surveying to distribution and money collection. Our logistics department is able to carry out registration, importing plans for our partner\'s products effectively. Over the last 70 years we have created a solutions based distribution system that is far reaching even to the most remote and rural areas.',
      img: 'assets/images/supply.jpg',
      features: [
        '32,000+ customers nationwide',
        '500+ sales representatives',
        '450+ vehicles including refrigerated',
        '24-hour delivery lead time'
      ]
    },
    {
      id: 4,
      name: 'Sales & Marketing',
      desc: 'With a dedicated sales force of over 500 professionals and comprehensive marketing capabilities, we provide full sales and marketing services for both our own brands and partner products. Our team covers all therapeutic areas across Egypt\'s healthcare landscape.',
      img: 'assets/images/sales.jpg',
      features: [
        '500+ sales professionals',
        'Nationwide coverage',
        'Strategic marketing',
        'Key account management'
      ]
    },
    {
      id: 5,
      name: 'In-licensing & Outsourcing',
      desc: 'Through our in-licensing and outsourcing services, we offer international partners a turnkey solution for entering the Egyptian market. We handle everything from registration and importation to distribution and sales, allowing partners to focus on their core business.',
      img: 'assets/images/ou.jpg',
      features: [
        'Turnkey market entry',
        'Full regulatory support',
        'Distribution network access',
        'Local market expertise'
      ]
    },
    {
      id: 6,
      name: 'PSP (Patient Support Program)',
      desc: 'Our Patient Support Programs provide comprehensive patient education, adherence support, and disease management services. We work closely with healthcare providers to ensure patients receive the best possible care and treatment outcomes.',
      img: 'assets/images/su.jpg',
      features: [
        'Patient education programs',
        'Adherence support',
        'Disease management',
        'Healthcare provider collaboration'
      ]
    },
    {
      id: 7,
      name: 'Warehousing',
      desc: 'We offer warehousing services to our customers via our 22 proprietary warehouses. Each individual warehouse has its own cooling area and is listed. Stockpharm provides over 25,000 Square Meters of suitable storage for the diverse range of products we represent.',
      img: 'assets/images/rt.jpg',
      features: [
        '22 warehouses with cooling areas',
        '25,000+ SQM storage capacity',
        'Temperature controlled for cold chain',
        'Microsoft AX warehousing system'
      ]
    },
    {
      id: 8,
      name: 'Third Party Warehousing',
      desc: 'In an era where pharmaceutical, cosmetics & nutrition products/manufacturers are outpacing an extensive amount of pharmaceutical goods in the market, reliable logistics are imperative. We have the capacity for third party warehousing and have been outsourced by many of our partners to supply dependable warehouses.',
      img: 'assets/images/pr.jpg',
      features: [
        'Competitive storage rates',
        'Full visibility of stock movement',
        'Strategically located warehouses',
        'Expert warehousing team'
      ]
    }
  ];

  ngAfterViewInit(): void {
    this.setupRevealObserver();
    this.setupStatsObserver();
  }

  /**
   * Fades + rises every #animatedElement into place as it scrolls into
   * view. Each element is observed individually and unobserved once it
   * has revealed, so it never re-triggers while scrolling back and forth.
   */
  private setupRevealObserver(): void {
    const elements = this.animatedElements?.toArray() ?? [];
    if (!elements.length) {
      return;
    }

    // Old-browser fallback: just show everything, no IntersectionObserver support.
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.nativeElement.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el.nativeElement));
  }

  /** Counts each stat up to its target value once it scrolls into view. */
  private setupStatsObserver(): void {
    const elements = this.statElements?.toArray() ?? [];
    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset['value'] || '0', 10);
            this.animateNumber(el, target);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    elements.forEach(el => observer.observe(el.nativeElement));
  }

  /** Eased count-up (ease-out-cubic) for a smoother, less mechanical finish. */
  private animateNumber(el: HTMLElement, target: number): void {
    const duration = 1400;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(target * easeOutCubic(progress));
      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString();
      }
    };

    requestAnimationFrame(step);
  }

  openModal(service: Service): void {
    this.selectedService = service;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedService = null;
    document.body.style.overflow = '';
  }
}