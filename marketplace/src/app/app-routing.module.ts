import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserActionsComponent } from './components/user-actions/user-actions.component';
import { SellItemComponent } from './components/sell-item/sell-item.component';
import { BuyItemComponent } from './components/buy-item/buy-item.component';


const routes: Routes = [
  { path: '', component: UserActionsComponent },
  { path: 'sell', component: SellItemComponent },
  { path: 'buy', component: BuyItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
