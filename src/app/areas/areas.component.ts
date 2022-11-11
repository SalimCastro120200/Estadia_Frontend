import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreasService } from '../servicios/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  lista: any = [];
  page!: number;

  constructor( private AreasService: AreasService, private router: Router) { }

  ngOnInit(): void {
    this.listarArea();
  }

  listarArea(){
    this.AreasService.getAreas().subscribe(
      res => { 
        console.log( res )
        this.lista = res 
      },
      err => console.log( err )
    );
  }

  eliminar(id: string){
    this.AreasService.deleteAreas(id).subscribe( 
      res => {
        this.listarArea()
      },
      err => console.log( err )
    )
  }

  modificar(id: string){
    this.router.navigate(['/edit/' + id])
  }

}
