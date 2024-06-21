import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderPipe } from '../placeholder.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule, CommonModule,PlaceholderPipe],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  inputText: string = '';
  placeholderText: string = 'Enter at least 5 characters';
}
