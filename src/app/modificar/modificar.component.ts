import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AreasService, Area } from '../servicios/areas.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  area: Area={
    id_area:'',
    nombre:'',
    estado: 0
  };

  constructor( private AreasService: AreasService, private router:Router, private activeRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log( 'ID de Entrada ' + id_entrada );
    this.AreasService.getUnAreas(id_entrada);
          // res =>{
          //     this.area = res
          //   }
  }



  modificar()
  {
    // this.AreasService.editAreas(this.area.id_area, this.area).subscribe(
    //   res=>{
    //     console.log(res);
    //   },
    //   err=>console.log(err)
    // // );

    // this.router.navigate(['/editAreas']);
  }

}

