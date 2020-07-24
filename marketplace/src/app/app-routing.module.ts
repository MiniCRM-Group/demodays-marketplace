import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserActionsComponent } from './components/user-actions/user-actions.component';
import { SellItemComponent } from './components/sell-item/sell-item.component';
import { BuyItemComponent } from './components/buy-item/buy-item.component';
import { UploadComponent } from './components/sell-item/upload/upload.component';
import { DetailsComponent } from './components/sell-item/details/details.component';
import { SubmitComponent } from './components/sell-item/submit/submit.component';


const routes: Routes = [
  { path: '', component: UserActionsComponent },
  { path: 'sell', component: SellItemComponent,
    children: [
      { path: 'upload', component: UploadComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'submit', component: SubmitComponent },
    ]},
  { path: 'buy', component: BuyItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
