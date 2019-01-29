import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NewsService } from './news.service';
import { ClubsService } from './clubs.service';
import { TrainersService } from './trainers.service';

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
import { NewsListComponent } from './news/news-list/news-list.component';
import { ClubsListComponent } from './clubs/clubs-list/clubs-list.component';
import { FlaersComponent } from './flaers/flaers.component';
import { TrainersListComponent } from './trainers/trainers-list/trainers-list.component';
import { LoginComponent } from './login/login.component';
import { NewsShowComponent } from './news/news-show/news-show.component';
import { ClubsShowComponent } from './clubs/clubs-show/clubs-show.component';
import { TrainersShowComponent } from './trainers/trainers-show/trainers-show.component';
import { LiveComponent } from './live/live.component';

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
    ClubsIndexComponent,
    NewsListComponent,
    ClubsListComponent,
    FlaersComponent,
    TrainersListComponent,
    LoginComponent,
    NewsShowComponent,
    ClubsShowComponent,
    TrainersShowComponent,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsService, ClubsService, TrainersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
