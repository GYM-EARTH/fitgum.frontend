import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { FlaersComponent } from './flaers/flaers.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ClubsComponent } from './clubs/clubs.component';
import { LoginComponent } from './login/login.component';
import { NewsShowComponent } from './news/news-show/news-show.component';
import { ClubsShowComponent } from './clubs/clubs-show/clubs-show.component';
import { TrainersShowComponent } from './trainers/trainers-show/trainers-show.component';
import { LiveComponent } from './live/live.component';
import { MapComponent } from './map/map.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { TermsComponent } from './footer/terms/terms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'flaers', component: FlaersComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news/:id', component: NewsShowComponent },
  { path: 'clubs/:id', component: ClubsShowComponent },
  { path: 'trainers/:id', component: TrainersShowComponent },
  { path: 'live', component: LiveComponent },
  { path: 'map', component: MapComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'terms-of-use', component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
