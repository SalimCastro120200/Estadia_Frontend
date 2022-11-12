import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelarEmpleadosComponent } from './modelar-empleados.component';

describe('ModelarEmpleadosComponent', () => {
  let component: ModelarEmpleadosComponent;
  let fixture: ComponentFixture<ModelarEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelarEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
