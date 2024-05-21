import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
    { path: '',
    component: HomeComponent },
    {path: 'cardapio',
    component: CardapioComponent
    },
    { path: 'sobre',
    component: SobreComponent
    },
    { path: 'blog',
    component: BlogComponent
    }
];
