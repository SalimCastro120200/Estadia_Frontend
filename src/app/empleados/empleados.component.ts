import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../servicios/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  listaEmpeados: any = [];
  public page!: number;

  constructor( private EmpleadosService: EmpleadosService ) { }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  listarEmpleados(){
    this.EmpleadosService.getEmpleados().subscribe(
      res => { 
        console.log( res )
        this.listaEmpeados = res 
      },
      err => console.log( err )
    );
  }
}
