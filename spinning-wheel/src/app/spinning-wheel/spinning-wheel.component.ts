import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spinning-wheel',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './spinning-wheel.component.html',
  styleUrl: './spinning-wheel.component.css'
})
export class SpinningWheelComponent {
  outcomes: string[] = ['Congratulations, you won a T-Shirt', 'Congratulations, you won a Watch', 'Try Again', 'Congratulations, you won a Sunglasses!'];
  result: string = '';
  extraSpin: boolean = false;

  spinWheel() {
    const randomIndex = Math.floor(Math.random() * this.outcomes.length);
    this.result = this.outcomes[randomIndex];
    this.extraSpin = this.result === 'Try Again';
  }

}
