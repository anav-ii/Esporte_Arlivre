import { Routes } from '@angular/router';

import { AtletaComponent } from './component/atleta-component/atleta-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { CorridaComponent } from './component/corrida/corrida.component';
import { AtletaListaComponent } from './component/atleta/atleta-lista-component/atleta-lista-component.component';
import { CdisponiveiscomponentComponent } from './component/cdisponiveiscomponent/cdisponiveiscomponent.component';
import { InscricaocomponentComponent } from './component/inscricaocomponent/inscricaocomponent.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'cadastroAtleta',
    component: AtletaComponent
  },
  {
    path: 'cadastroAtleta/:id',
    component: AtletaComponent
  },
  {
    path: 'corridaComponent',
    component: CorridaComponent
  },
  {
    path: 'listaAtleta',
    component: AtletaListaComponent
  },
  {
    path: 'cdisponiveis',
    component: CdisponiveiscomponentComponent
  },
  {
    path: 'inscricao',
    component: InscricaocomponentComponent
  }
];
