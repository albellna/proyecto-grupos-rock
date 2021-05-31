import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { GruposRockService } from 'src/app/services/grupos-rock.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  gruposArray: any[] = [];

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gruposService: GruposRockService, private router: Router) {}

  ngOnInit(): void {
    this.cargarGrupos();
  }

  public cargarGrupos(){
    this.gruposService.listarGrupos().subscribe(data => {
      this.gruposArray = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  public detallesGrupo(id: number) {
    this.router.navigate(['/grupo', id]);
  }

  public borrarGrupo(id: string) {
    if (confirm('¿Quieres borrar el grupo con ID '+id+'?')){
      this.gruposService.borrarGrupo(id).subscribe(data => {
        this.cargarGrupos();
      })
    }
  }
}
