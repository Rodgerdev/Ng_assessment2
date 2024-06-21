import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinningWheelComponent } from './spinning-wheel/spinning-wheel.component';
import { InputFieldComponent } from './input-field/input-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SpinningWheelComponent, InputFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spinning-wheel';
}
