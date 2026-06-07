import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Partner {
  name: string;
  type: string;
  country: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './partners.html',
  styleUrl: './partners.scss',   // ← السطر ده هو السبب
})
export class PartnersComponent {
  importationPartners: Partner[] = [
    { name: 'Janssen',                    type: 'Importation', country: 'Belgium / USA' },
    { name: 'MSD USA',                    type: 'Importation', country: 'USA' },
    { name: 'Allergan International',     type: 'Importation', country: 'USA' },
    { name: 'Hikma Pharma',               type: 'Importation', country: 'Jordan / UK' },
    { name: 'AbbVie',                     type: 'Importation', country: 'USA' },
    { name: 'New Bridge',                 type: 'Importation', country: 'International' },
    { name: 'LifeScan',                   type: 'Importation', country: 'USA' },
    { name: 'Cevomed',                    type: 'Importation', country: 'International' },
    { name: 'Algorithm',                  type: 'Importation', country: 'International' },
    { name: 'Mallinckrodt',               type: 'Importation', country: 'USA' },
    { name: 'Now Foods',                  type: 'Importation', country: 'USA' },
    { name: 'Pronova Laboratories BV',    type: 'Importation', country: 'Norway' },
    { name: 'Novartis Egypt Health Care', type: 'Importation', country: 'Switzerland' },
    { name: 'Henkel Schwartzkopf',        type: 'Importation', country: 'Germany' },
    { name: 'Servier Egypt',              type: 'Importation', country: 'France' },
    { name: 'Abbott Egypt',               type: 'Importation', country: 'USA' },
  ];

  distributionPartners: Partner[] = [
    { name: 'Hikma',                type: 'Distribution', country: 'Jordan / UK' },
    { name: 'J&J Company',          type: 'Distribution', country: 'USA' },
    { name: 'GSK',                  type: 'Distribution', country: 'UK' },
    { name: 'Pharco',               type: 'Distribution', country: 'Egypt' },
    { name: 'Marcyrl',              type: 'Distribution', country: 'Egypt' },
    { name: 'Liptis',               type: 'Distribution', country: 'Egypt' },
    { name: 'Sedico',               type: 'Distribution', country: 'Egypt' },
    { name: 'Luna',                 type: 'Distribution', country: 'Egypt' },
    { name: 'Ferring',              type: 'Distribution', country: 'Switzerland' },
    { name: 'SKB',                  type: 'Distribution', country: 'Egypt' },
    { name: 'MUP',                  type: 'Distribution', country: 'Egypt' },
    { name: 'GNP',                  type: 'Distribution', country: 'Egypt' },
    { name: 'Boehringer Ingelheim', type: 'Distribution', country: 'Germany' },
    { name: 'Amoun',                type: 'Distribution', country: 'Egypt' },
    { name: 'Vitabiotics',          type: 'Distribution', country: 'UK' },
  ];

  newPartners: Partner[] = [
    { name: 'Eva Pharma',              type: 'New Partner', country: 'Egypt' },
    { name: 'Mundi',                   type: 'New Partner', country: 'International' },
    { name: 'AstraZeneca',             type: 'New Partner', country: 'UK / Sweden' },
    { name: 'Multipharma',             type: 'New Partner', country: 'International' },
    { name: 'Eva Cosmetics',           type: 'New Partner', country: 'Egypt' },
    { name: 'Smith Klein',             type: 'New Partner', country: 'International' },
    { name: 'Merck',                   type: 'New Partner', country: 'Germany' },
    { name: 'Masco',                   type: 'New Partner', country: 'International' },
    { name: 'One Pharma Mylan',        type: 'New Partner', country: 'USA' },
    { name: 'Saja',                    type: 'New Partner', country: 'Saudi Arabia' },
    { name: 'Evyap',                   type: 'New Partner', country: 'Turkey' },
    { name: 'October Pharma',          type: 'New Partner', country: 'Egypt' },
    { name: 'Al Andalous Medical',     type: 'New Partner', country: 'Egypt' },
    { name: 'Medlink',                 type: 'New Partner', country: 'Egypt' },
    { name: 'Tabuk Pharmaceuticals',   type: 'New Partner', country: 'Saudi Arabia' },
    { name: 'Egyptian Syrian Company', type: 'New Partner', country: 'Egypt / Syria' },
  ];
}