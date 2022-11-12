import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../servicios/empleados.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  listaEmpeados: any = [];
  public page!: number;

  constructor( private EmpleadosService: EmpleadosService, private router: Router ) { }

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

  eliminar(id: string){
    this.EmpleadosService.deleteEmpleados(id).subscribe( 
      res => {
        this.listarEmpleados()
      },
      err => console.log( err )
    )
  }

  modificar(id: string){
    this.router.navigate(['/edit/' + id])
  }
}
