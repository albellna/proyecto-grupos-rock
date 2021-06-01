import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GruposRockService } from '../../services/grupos-rock.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  @Output() resultadoBusqueda = new EventEmitter<any>();
  
  constructor(private gruposService: GruposRockService) { }

  ngOnInit(): void {
  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }
    this.gruposService.buscarGrupo(valor).subscribe(data => {
      this.resultadoBusqueda.emit(data);
    });
    this.txtBuscar.nativeElement.value = '';
  }

  resetBusqueda() {
    this.gruposService.listarGrupos().subscribe(data => {
      this.resultadoBusqueda.emit(data);
    });
    this.txtBuscar.nativeElement.value = '';
  }
}
