import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './games/components/action/action.component';
import { AllGamesComponent } from './games/components/all-games/all-games.component';
import { PcComponent } from './games/components/pc/pc.component';

const routes: Routes = [
  {path:'', redirectTo:'AllGames', pathMatch:'full'},

  {path:'AllGames',component:AllGamesComponent},
  {path:'pc',component:PcComponent},
  {path:'action',component:ActionComponent},

  {path:'**', redirectTo:'AllGames', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
