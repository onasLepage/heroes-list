import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroeSolo: any = {};
  @Input() indice: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this._router.navigate(['/heroe-solo', this.indice]);
    // this.heroeSeleccionado.emit(this.indice);
  }

}
