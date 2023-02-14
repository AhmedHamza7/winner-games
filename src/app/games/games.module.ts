import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AsideComponent } from './components/aside/aside.component';



@NgModule({
  declarations: [
    AllGamesComponent,
    GameDetailsComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllGamesComponent
  ]
})
export class GamesModule { }
