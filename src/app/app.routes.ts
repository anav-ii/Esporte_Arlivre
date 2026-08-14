import { Routes } from '@angular/router';
import { AtletaComponentComponent } from './component/atleta-component/atleta-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { CorridaComponent } from './component/corrida/corrida.component';


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
        component: AtletaComponentComponent
    },
    {
        path:"corridaComponent",
        component: CorridaComponent
    }

];
