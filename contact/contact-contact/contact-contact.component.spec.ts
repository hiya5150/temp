import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactContactComponent } from './contact-contact.component';

describe('ContactContactComponent', () => {
  let component: ContactContactComponent;
  let fixture: ComponentFixture<ContactContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
