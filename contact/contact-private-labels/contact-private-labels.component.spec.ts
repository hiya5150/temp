import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPrivateLabelsComponent } from './contact-private-labels.component';

describe('ContactPrivateLabelsComponent', () => {
  let component: ContactPrivateLabelsComponent;
  let fixture: ComponentFixture<ContactPrivateLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPrivateLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPrivateLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
