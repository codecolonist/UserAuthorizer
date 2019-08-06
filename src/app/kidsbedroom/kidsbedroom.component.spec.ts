import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsbedroomComponent } from './kidsbedroom.component';

describe('KidsbedroomComponent', () => {
  let component: KidsbedroomComponent;
  let fixture: ComponentFixture<KidsbedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsbedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsbedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
