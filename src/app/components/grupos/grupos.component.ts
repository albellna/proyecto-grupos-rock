import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { GruposRockService } from 'src/app/services/grupos-rock.service';
import { GruposRock } from '../../interfaces/grupos-rock';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  gruposArray: GruposRock[] = [];

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gruposRock: GruposRockService, private router: Router) {}

  ngOnInit(): void {
    this.gruposArray = JSON.parse(localStorage.getItem('gruposRock')!) || [];
  }

  public detallesGrupo(id: number) {
    this.router.navigate(['/grupo', id]);
  }

  public borrarProyecto(id: number) {
    if (confirm('¿Quieres borrar el grupo con ID '+id+'?')){
      this.gruposArray.forEach((element, index) => {
        if(element.id == id){
          this.gruposArray.splice(index, 1);
          localStorage.setItem('gruposRock', JSON.stringify(this.gruposArray));
        }
      });
    }
  }

  public resultadoBusqueda(arg: string) {


    this.gruposArray.find(element => {
      if(element.name.match(arg) || element.miembros.match(arg) || element.anyosActivos.match(arg) || element.descripcion.match(arg)){
        true;
      } else {
        false;
      }
    });
  }

  public buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }

    this.gruposArray.map(element => {
      if(element.name == valor){
        return element;
      }
    });
    
    this.txtBuscar.nativeElement.value = '';
  }
}
