import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkativeButtonComponent } from './talkative-button.component';

describe('TalkativeButtonComponent', () => {
  let component: TalkativeButtonComponent;
  let fixture: ComponentFixture<TalkativeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkativeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalkativeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
