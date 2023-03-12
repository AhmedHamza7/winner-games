import { AuthenticationModule } from './../authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AsideComponent } from './components/aside/aside.component';




@NgModule({
  declarations: [
    AllGamesComponent,
    GameDetailsComponent,
    AsideComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    AllGamesComponent,
    AsideComponent,
    GameDetailsComponent
  ]
})
export class GamesModule { }
