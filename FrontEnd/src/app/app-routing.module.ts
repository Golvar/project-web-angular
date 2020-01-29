import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'catalogue', loadChildren: './catalogue/catalogue.module#CatalogueModule' },
  { path: 'compte', loadChildren: './compte/compte.module#CompteModule' },
  { path: 'panier', loadChildren: './panier/panier.module#PanierModule' },
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionModule' },
  { path: 'deconnexion', loadChildren: './catalogue/catalogue.module#CatalogueModule'},
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilModule'},
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
