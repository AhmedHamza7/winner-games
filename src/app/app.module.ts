import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http'
import { BrowseModule } from './browse/browse.module';
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
    BrowseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
