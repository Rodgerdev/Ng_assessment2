import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [
    'Hello, stranger!',
    'No Ice-Breaker Today!',
    'Welcome to Teach2Give!',
    'I am a Junior Dev',
    'This is the Jitu!'
  ];

  constructor() { }

  getRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    return this.messages[randomIndex];
  }
}
