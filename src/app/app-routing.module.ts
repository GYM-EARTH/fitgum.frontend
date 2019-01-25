import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { FlaersComponent } from './flaers/flaers.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ClubsComponent } from './clubs/clubs.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'flaers', component: FlaersComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
