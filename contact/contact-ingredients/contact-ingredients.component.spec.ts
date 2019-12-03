import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIngredientsComponent } from './contact-ingredients.component';

describe('ContactIngredientsComponent', () => {
  let component: ContactIngredientsComponent;
  let fixture: ComponentFixture<ContactIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
