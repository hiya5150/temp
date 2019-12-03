import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrivateLabelComponent } from './edit-private-label.component';

describe('EditPrivateLabelComponent', () => {
  let component: EditPrivateLabelComponent;
  let fixture: ComponentFixture<EditPrivateLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrivateLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrivateLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
