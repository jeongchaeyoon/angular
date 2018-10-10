import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './common/page-not-found.component';

import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { DragListenerDirective } from '../libs/directives/drag-listener.directive';
import { MenuService } from '../service/menu.service';
import { HttpAdapterService } from '../libs/utils/http-adapter.service';
import { AlertService } from '../libs/utils/alert.service';
import { StringUtilService } from '../libs/utils/string-util.service'
import { StringComparePipe } from '../libs/pipes/string-compare.pipe';
import { StringSplitPipe } from '../libs/pipes/string-split.pipe';
import { StringUppercaseAtPipe } from '../libs/pipes/string-uppercase-at.pipe';
import { NumberCommaAddPipe } from '../libs/pipes/number-comma-add.pipe';
import { NumberCommaRemovePipe } from '../libs/pipes/number-comma-remove.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,

    /* directives */
    DragListenerDirective,
    StringComparePipe,
    StringSplitPipe,
    StringUppercaseAtPipe,
    NumberCommaAddPipe,
    NumberCommaRemovePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [
    MenuService,

    StringUtilService,
    HttpAdapterService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
