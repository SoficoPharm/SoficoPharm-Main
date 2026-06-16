import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Brand {
  name: string;
  category: string;
  desc: string;
  img: string;
  modalImg?: string;
  link?: string;
}

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './our-brands.html',
  styleUrl: './our-brands.scss',
})
export class BrandsComponent {
  selectedBrand: Brand | null = null;

  brands: Brand[] = [
    { 
      name: 'SofiLife', 
      category: 'Lifestyle & Wellness', 
      desc: 'Lifestyle and wellness products that promote a healthier, more balanced daily life for patients of all ages.',
      img: '/logo/SofiLife.png',
      link: 'https://sofilife.net/'
    },
    { 
      name: 'NOW', 
      category: 'Nutritional Supplements',
      desc: 'International nutritional supplements brand exclusively imported by SOFICOPHARM — high-quality, evidence-based nutrition.',
      img: '/logo/Now2x@1.png',
      link: 'https://www.nowfoods.com/'
    },
    { 
      name: 'SofiMer', 
      category: 'Respiratory',
      desc: 'Specialised respiratory care solutions — helping patients breathe freely with targeted pulmonary and airway treatments.',
      img: '/logo/SofiMer.png',
      link: 'https://sofimer.net/'
    },
    { 
      name: 'SOFICO Cosmetics', 
      category: 'Skincare & Cosmetics',
      desc: "SOFICOPHARM's own cosmetics line — a full range of skincare and personal care products meeting international quality standards.",
      img: '/logo/logo_soficoCosmetics.png',
      link: 'https://soficocosmetics.com/'
    },
    { 
      name: 'Sofica Animal Care', 
      category: 'Veterinary & Animal Care',
      desc: 'Specialised veterinary and animal health products providing safe, effective care for companion and livestock animals.',
      img: '/logo/Asset 1@4x.png',
    },
    { 
      name: 'SofiPay', 
      category: 'Healthcare Payments',
      desc: 'Integrated healthcare payment and patient support solutions simplifying pharmaceutical transactions across Egypt.',
      img: '/logo/Asset 3@4x.png',
    },
    { 
      name: 'SOFI AID', 
      category: 'First Aid & Emergency',
      desc: 'First aid and emergency pharmaceutical products available across pharmacies and healthcare facilities nationwide.',
      img: '/logo/Asset 4@4x.png',
    },
    { 
      name: 'Sofi Farm', 
      category: 'Specialty Pharmaceuticals',
      desc: 'Premium specialty pharmaceutical products certified to authentic quality standards for discerning healthcare professionals.',
      img: '/logo/Asset 5@4x.png',
    },
    { 
      name: 'SOFICO', 
      category: 'Pharmaceutical',
      desc: 'Core pharmaceutical brand covering a broad range of prescription and OTC medications across multiple therapeutic areas.',
      img: '/logo/Asset 6@4x.png',
    },
    { 
      name: 'SOFI MED', 
      category: 'Medical',
      desc: 'Advanced medical solutions and specialty pharmaceutical products backed by international clinical evidence.',
      img: '/logo/Asset 7@4x.png',
    },
    { 
      name: 'SofiClean', 
      category: 'Hygiene & Sanitation',
      desc: 'All-purpose hygiene and sanitation products formulated to maintain clean, safe healthcare environments.',
      img: '/logo/Asset 8@4x.png',
    },
    { 
      name: 'SOFI VIT', 
      category: 'Vitamins & Supplements',
      desc: 'Comprehensive range of vitamins, minerals, and nutritional supplements designed to support overall health and well-being.',
      img: '/logo/Asset 9@4x.png',
    },
    { 
      name: 'Sofi Herbal', 
      category: 'Herbal & Natural',
      desc: 'Natural and herbal product line harnessing the power of plant-based ingredients for gentle, effective healthcare.',
      img: '/logo/Asset 10@4x.png',
    },
    { 
      name: 'Baby Sofico', 
      category: 'Baby & Paediatrics',
      desc: 'Gentle, clinically safe baby care and paediatric health products for infants and young children.',
      img: '/logo/Asset 11@4x.png',
    },
    { 
      name: 'Sunrova', 
      category: 'Energy & Nutrition',
      desc: 'Energy and nutritional support products formulated to boost vitality, immunity, and daily performance.',
      img: '/logo/Asset 14@4x.png',
    },
    { 
      name: 'Sofico Shield', 
      category: 'Specialty & Protective',
      desc: 'Protective and specialty pharmaceutical solutions providing an extra layer of health security for patients.',
      img: '/logo/Asset 15@4x.png',
      link: 'https://www.sofiguard.com/'
    },
    { 
      name: 'SOFI MED Pro', 
      category: 'Medical — Professional',
      desc: 'Professional-grade medical pharmaceutical formulations designed for hospital and clinical settings.',
      img: '/logo/Asset 17@4x.png',
    },
    { 
      name: 'SOFIMed', 
      category: 'General Medicine',
      desc: 'Broad-spectrum general medicine brand delivering trusted pharmaceutical solutions for everyday healthcare needs.',
      img: '/logo/Asset 18@4x.png',
    },
  ];

  openModal(brand: Brand): void {
    this.selectedBrand = brand;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedBrand = null;
    document.body.style.overflow = '';
  }

  openLink(link?: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }
}