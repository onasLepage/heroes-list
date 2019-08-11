import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Esto permite traer el contenido
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroe: any[] = [];
  termino: string;

  constructor(private _activateroute: ActivatedRoute,
    private _heroeService: HeroesService, private _router: Router) { }

  ngOnInit() {
    this._activateroute.params.subscribe(params => {

      this.termino = params['termino'];
      // el id de abajo lo trae por el { path: 'heroe-solo/:id', component: HeroeSoloComponent }, del archivo routes.ts
      this.heroe = this._heroeService.buscarHeroes(params['termino']);
      console.log(this.heroe);
    });
  }
  verHeroe(idx: number) {
    this._router.navigate(['/heroe-solo', idx]);

  }

}
