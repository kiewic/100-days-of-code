import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSampleComponent } from './form-sample/form-sample.component';
import { TableOfContentComponent } from './table-of-content/table-of-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSampleComponent,
    TableOfContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
