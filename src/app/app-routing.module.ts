import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { BodyComponent } from './body/body.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { ModelarEmpleadosComponent } from './modelar-empleados/modelar-empleados.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'addArea', component: AgregarComponent },
  { path: 'editArea/:id', component: ModificarComponent },
  { path: 'addEmpleados', component: AgregarEmpleadosComponent },
  { path: 'editEmpleados/:id', component: ModelarEmpleadosComponent },
  { path: '**', component: BodyComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
