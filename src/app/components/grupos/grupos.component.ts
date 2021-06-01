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
  mostrarGrupos: boolean = true;

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gruposService: GruposRockService, private router: Router) {}

  ngOnInit(): void {
    this.cargarGrupos();
  }

  public mostrarDatos() {
    if(this.gruposArray.length != 0){
      this.mostrarGrupos = true;
    } else {
      this.mostrarGrupos = false;
    }
  }

  public cargarGrupos(){
    this.gruposService.listarGrupos().subscribe(data => {
      this.gruposArray = data;
      this.mostrarDatos();
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  public resultados(res: any){
    this.gruposArray = res;
    this.mostrarDatos();
  }

  public detallesGrupo(id: number) {
    this.router.navigate(['/grupo', id]);
  }

  public crearGrupo() {
    this.router.navigate(['/creargrupo']);
  }

  public borrarGrupo(id: string) {
    if (confirm('¿Quieres borrar el grupo con ID '+id+'?')){
      this.gruposService.borrarGrupo(id).subscribe(data => {
        this.cargarGrupos();
      });
    }
  }
}
