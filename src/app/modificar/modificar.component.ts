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

  id_area: string = "";

  area: Area = {
    id_area: '',
    nombre: '',
    estado: 0
  };

  constructor(private AreasService: AreasService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_area = this.activeRoute.snapshot.params['id'];
    // this.AreasService.getUnAreas(this.id_area).subscribe(
    //   res => {
    //     this.area = res;
    //   },

    //   err => console.log(err)
    // );
  }



  modificar() {

    this.AreasService.editAreas(this.id_area, this.area).subscribe(
      res => {
        this.router.navigate(['/editArea']);
      },

      err => console.log(err)
    );
  }


}

