import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailSentPage } from './email-sent.page';

describe('EmailSentPage', () => {
  let component: EmailSentPage;
  let fixture: ComponentFixture<EmailSentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
