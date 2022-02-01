import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ContactComponent} from "./contact/contact.component";
import {MusicDetailResolverResolver} from "./partage/music-detail-resolver/music-detail-resolver.resolver";
import {ListeMusiquesComponent} from "./liste-musiques/liste-musiques.component";
import {EditionComponent} from "./liste-musiques/edition/edition.component";


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path:'accueil', component: AccueilComponent},
  {path:'listMusic', component: ListeMusiquesComponent},
  { path: 'edit/:id', component: EditionComponent, resolve: { music: MusicDetailResolverResolver } },
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
