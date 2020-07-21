import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { UserActionsComponent } from './components/user-actions/user-actions.component';
import { SellItemComponent } from './components/sell-item/sell-item.component';
import { BuyItemComponent } from './components/buy-item/buy-item.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { UploadComponent } from './components/sell-item/upload/upload.component';
import { DetailsComponent } from './components/sell-item/details/details.component';
import { SubmitComponent } from './components/sell-item/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserActionsComponent,
    SellItemComponent,
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
