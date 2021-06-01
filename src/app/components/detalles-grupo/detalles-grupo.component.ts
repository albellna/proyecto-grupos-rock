import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
    descripcion: '',
    video: ''
  };

  constructor(private _sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private gruposService: GruposRockService, private router: Router) {
    this.activatedRoute.params.subscribe(response => {
      this.id = response.id;
    });
  }

  ngOnInit(): void {
    this.detallesGrupo();
    
  }

  public safeURL() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.grupo.video);
  }

  public modificarGrupo(id: number) {
    this.router.navigate(['/modificargrupo', id]);
  }

  public detallesGrupo() {
    this.gruposService.listarUnGrupo(this.id).subscribe(data => {
      this.grupo = data;
      console.log(data.video);
      
    });  
  }

  volverButton() {
    this.router.navigate(['/']);
}

}
