import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemRowComponent} from './components/item-row/item-row.component';
import {RowComponent} from './components/row/row.component';
import {HistoryComponent} from './components/history/history.component';
import {HttpClientModule} from "@angular/common/http";
import {TooltipComponent} from './components/tooltip/tooltip.component';
import { IntersectDirective } from './intersect.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemRowComponent,
    RowComponent,
    HistoryComponent,
    TooltipComponent,
    IntersectDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
