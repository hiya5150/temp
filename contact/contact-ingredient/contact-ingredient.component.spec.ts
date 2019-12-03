import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIngredientComponent } from './contact-ingredient.component';

describe('ContactIngredientComponent', () => {
  let component: ContactIngredientComponent;
  let fixture: ComponentFixture<ContactIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
