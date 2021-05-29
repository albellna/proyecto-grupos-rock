import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GruposRockService } from '../../services/grupos-rock.service';
import { GruposRock } from 'src/app/interfaces/grupos-rock';

@Component({
  selector: 'app-detalles-grupo',
  templateUrl: './detalles-grupo.component.html',
  styleUrls: ['./detalles-grupo.component.css']
})
export class DetallesGrupoComponent implements OnInit {

  id: any;
  grupo: GruposRock = {
    id: 0,
    name: '',
    anyosActivos: '',
    miembros: '',
    descripcion: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private gruposService: GruposRockService) {
    this.activatedRoute.params.subscribe(response => {
      this.id = response.id;
    });
    this.grupo = JSON.parse(localStorage.getItem('gruposRock')!) || [];
  }

  ngOnInit(): void {
    this.detallesGrupo();
  }

  public detallesGrupo() {
    this.id = this.id - 1;
    this.grupo = this.gruposService.grupos[this.id];
  }
}
