import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Esto permite traer el contenido
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe-solo',
  templateUrl: './heroe-solo.component.html'
})
export class HeroeSoloComponent {

  heroe: any = {};

  constructor(private _activatereoute: ActivatedRoute,
    private _heroeService: HeroesService) {

    this._activatereoute.params.subscribe(params => {
      // el id de abajo lo trae por el { path: 'buscar/:termino', component: BuscadorComponent }, del archivo routes.ts
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

}
