import { Component, OnInit } from '@angular/core';
import { EmpleadosService, Empleados } from '../servicios/empleados.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrls: ['./agregar-empleados.component.css']
})
export class AgregarEmpleadosComponent implements OnInit {

  empleados: Empleados={
    id_empleados:'',
    nombres:'', 
    a_paterno:'', 
    a_materno:'',
    sexo:'',
    correo:'',
    telefono:'',
    fecha_nacimiento: '',
    dir_calle:'',
    dir_numero:'',
    dir_cp:'',
    dir_colonia:''
  };

  constructor( private EmpleadosService: EmpleadosService, private router: Router ) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.empleados.id_empleados;
    this.EmpleadosService.addEmpleados(this.empleados).subscribe();
    this.router.navigate(['/empleados']);
  }

}
