import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { BodyComponent } from './body/body.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: '**', component: EmpleadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
