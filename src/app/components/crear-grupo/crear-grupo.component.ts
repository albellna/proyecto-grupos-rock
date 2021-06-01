import { Component, OnInit } from '@angular/core';
import { GruposRockService } from '../../services/grupos-rock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {

  form: any = {};
  creado = false;
  falloCrear = false;
  msgError = '';
  msgOk = '';

  constructor(private gruposService: GruposRockService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.gruposService.crearGrupo(this.form).subscribe(data => {
      this.creado = true;
      this.falloCrear = false;
    },
      (err: any) => {
        this.msgError = err;
        this.creado = false;
        this.falloCrear = true;
      }
    );
  }

  volverButton() {
    this.router.navigate(['/']);
  }

}
