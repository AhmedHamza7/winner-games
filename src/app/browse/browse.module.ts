import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { GamesModule } from '../games/games.module';
import { CollectionsComponent } from './components/collections/collections.component';



@NgModule({
  declarations: [
    PlatformsComponent,
    CreatorsComponent,
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    GamesModule
  ]
})
export class BrowseModule { }
