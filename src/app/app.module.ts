import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { ListItemService } from './items.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
