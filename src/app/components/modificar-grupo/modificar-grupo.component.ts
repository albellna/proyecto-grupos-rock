import { Component, OnInit } from '@angular/core';
import { GruposRockService } from '../../services/grupos-rock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GruposRock } from '../../interfaces/grupos-rock';

@Component({
  selector: 'app-modificar-grupo',
  templateUrl: './modificar-grupo.component.html',
  styleUrls: ['./modificar-grupo.component.css']
})
export class ModificarGrupoComponent implements OnInit {

  form: GruposRock = {
    name: '',
    anyosActivos: '',
    miembros: '',
    descripcion: '',
    video: ''
  };
  id: any;
  creado = false;
  falloCrear = false;
  msgError = "";

  constructor(private router: Router, private gruposService: GruposRockService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(response => {
      this.id = response.id;
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
    console.log(this.router.url);
    
  }

  cargarDatos() {
    this.gruposService.listarUnGrupo(this.id).subscribe(data => {
      this.form = data;
    });
  }

  volverButton() {
      this.router.navigate(['/grupo', this.id]);
  }


  onUpdate() {
    this.gruposService.modificarGrupo(this.form, this.id).subscribe(data => {
      this.creado = true;
      this.falloCrear = false;
      this.router.navigate(['/grupo', this.id]);
    },
      (err: any) => {
        this.msgError = err;
        this.creado = false;
        this.falloCrear = true;
      }
    );
  }
}
