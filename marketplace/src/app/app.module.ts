import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { SellItemComponent } from './sell-item/sell-item.component';
import { BuyComponent } from './buy/buy.component';
import { BuyItemComponent } from './buy-item/buy-item.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { UploadComponent } from './sell-item/upload/upload.component';
import { DetailsComponent } from './sell-item/details/details.component';
import { SubmitComponent } from './sell-item/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserActionsComponent,
    SellItemComponent,
    BuyComponent,
    BuyItemComponent,
    ItemCardComponent,
    UploadComponent,
    DetailsComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
