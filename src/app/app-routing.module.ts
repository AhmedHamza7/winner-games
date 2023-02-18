import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformsComponent } from './browse/components/platforms/platforms.component';
import { AllGamesComponent } from './games/components/all-games/all-games.component';

const routes: Routes = [
  {path:'', redirectTo:'AllGames', pathMatch:'full'},

  {path:'AllGames',component:AllGamesComponent},
  {path:'platforms',component:PlatformsComponent},

  {path:'**', redirectTo:'AllGames', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
