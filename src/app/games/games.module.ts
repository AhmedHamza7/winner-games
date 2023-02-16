import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AsideComponent } from './components/aside/aside.component';
import { GamesComponent } from './components/games/games.component';
import { PcComponent } from './components/pc/pc.component';
import { ActionComponent } from './components/action/action.component';



@NgModule({
  declarations: [
    AllGamesComponent,
    GameDetailsComponent,
    AsideComponent,
    GamesComponent,
    PcComponent,
    ActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AllGamesComponent,
    GamesComponent,
    AsideComponent
  ]
})
export class GamesModule { }
