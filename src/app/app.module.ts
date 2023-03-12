import { AuthenticationModule } from './authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http'
import { BrowseModule } from './browse/browse.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesModule,
    SharedModule,
    HttpClientModule,
    BrowseModule,
    RouterModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
