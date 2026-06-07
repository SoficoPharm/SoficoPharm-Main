import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-export',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './export.html',
  styleUrl: './export.scss',
})
export class ExportComponent {}