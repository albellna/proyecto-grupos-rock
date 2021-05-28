import { Component, OnInit } from '@angular/core';
import { GruposRockService } from 'src/app/services/grupos-rock.service';
import { GruposRock } from '../../interfaces/grupos-rock';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  get grupos() {
    return this.gruposRock.grupos;
  }

  constructor(private gruposRock: GruposRockService) { }

  ngOnInit(): void {}

}
