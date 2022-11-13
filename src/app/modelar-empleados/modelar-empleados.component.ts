import { Component, OnInit } from '@angular/core';
import { EmpleadosService, Empleados } from '../servicios/empleados.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modelar-empleados',
  templateUrl: './modelar-empleados.component.html',
  styleUrls: ['./modelar-empleados.component.css']
})
export class ModelarEmpleadosComponent implements OnInit {

  id_empleados: string = "";

  empleados: Empleados = {
    id_empleados: '',
    nombres: '',
    a_paterno: '',
    a_materno: '',
    sexo: '',
    correo: '',
    telefono: '',
    fecha_nacimiento: '',
    dir_calle: '',
    dir_numero: '',
    dir_cp: '',
    dir_colonia: '',
  };

  constructor(  private EmpleadosService: EmpleadosService, private router: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id_empleados = this.activeRoute.snapshot.params['id'];
  }


  modificar() {

    this.EmpleadosService.editEmpleados(this.id_empleados, this.empleados).subscribe(
      res => {
        this.router.navigate(['/editEmpleados']);
      },

      err => console.log(err)
    );
  }

}
