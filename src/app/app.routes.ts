import { Routes } from '@angular/router';
import { AtletaComponent } from './component/atleta-component/atleta-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { CorridaComponent } from './component/corrida/corrida.component';
import { AtletaListComponent } from './component/atleta/atleta-lista-component/atleta-lista-component.component'; 

export const routes: Routes = [

    {
        path:"",
        redirectTo:"/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponentComponent
    },
    {
        path:"cadastroAtleta",
        component: AtletaComponent
    },
    {
        path:"corridaComponent",
        component: CorridaComponent
    },
    {
        path:"cadastroAtleta/:id",
        component: AtletaComponent
    },
    {
        path:"listaAtleta",
        component: AtletaListComponent
    }

];
