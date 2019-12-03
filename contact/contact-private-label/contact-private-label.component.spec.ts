import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPrivateLabelComponent } from './contact-private-label.component';

describe('ContactPrivateLabelComponent', () => {
  let component: ContactPrivateLabelComponent;
  let fixture: ComponentFixture<ContactPrivateLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPrivateLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPrivateLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
