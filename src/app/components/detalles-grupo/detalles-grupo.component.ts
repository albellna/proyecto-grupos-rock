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
    name: '',
    anyosActivos: '',
    miembros: '',
    descripcion: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private gruposService: GruposRockService) {
    this.activatedRoute.params.subscribe(response => {
      this.id = response.id;
    });
  }

  ngOnInit(): void {
    this.detallesGrupo();
  }

  public detallesGrupo() {
    this.gruposService.listarUnGrupo(this.id).subscribe(data => {
      this.grupo = data;
    });
  }
}
