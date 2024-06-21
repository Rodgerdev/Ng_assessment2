import { Directive, HostListener } from '@angular/core';
import { MessageService } from './message.service';

@Directive({
  selector: '[appTalkative]',
  standalone: true, 
  providers: [MessageService] 
})
export class TalkativeDirective {

  constructor(private messageService: MessageService) { }

  @HostListener('click') onClick() {
    const message = this.messageService.getRandomMessage();
    alert(message);
  }
}
