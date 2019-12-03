import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactContactsComponent } from './contact-contacts.component';

describe('ContactContactsComponent', () => {
  let component: ContactContactsComponent;
  let fixture: ComponentFixture<ContactContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
