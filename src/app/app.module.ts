import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieAppComponent } from './movie-app/movie-app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, MovieAppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
