import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { TrainersComponent } from './trainers/trainers.component';
import { NewsIndexComponent } from './news/news-index/news-index.component';
import { TrainersIndexComponent } from './trainers/trainers-index/trainers-index.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubsIndexComponent } from './clubs/clubs-index/clubs-index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    NewsComponent,
    TrainersComponent,
    NewsIndexComponent,
    TrainersIndexComponent,
    ClubsComponent,
    ClubsIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
