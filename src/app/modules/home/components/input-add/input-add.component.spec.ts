import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAddComponent } from './input-add.component';

describe('InputAddComponent', () => {
  let component: InputAddComponent;
  let fixture: ComponentFixture<InputAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputAddComponent]
    });
    fixture = TestBed.createComponent(InputAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
