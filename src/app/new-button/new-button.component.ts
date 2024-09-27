import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './new-button.component.html',
  styleUrl: './new-button.component.scss',
})
export class NewButtonComponent {}
