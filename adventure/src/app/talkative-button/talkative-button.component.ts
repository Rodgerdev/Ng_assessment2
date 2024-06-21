import { Component } from '@angular/core';
import { TalkativeDirective } from '../talkative.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-talkative-button',
  standalone: true,
  imports: [CommonModule, TalkativeDirective], 
  templateUrl: './talkative-button.component.html',
  styleUrls: ['./talkative-button.component.css']
})
export class TalkativeButtonComponent { }
