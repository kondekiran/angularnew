import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewangularComponent } from './newangular.component';

describe('NewangularComponent', () => {
  let component: NewangularComponent;
  let fixture: ComponentFixture<NewangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
