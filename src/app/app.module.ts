import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { HeaderComponent } from './header/header.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { FormComponent } from './form/form.component';
import { TrabajoInfoComponent } from './trabajo-info/trabajo-info.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ListaTrabajosComponent,
    HeaderComponent,
    TrabajoComponent,
    FormComponent,
    TrabajoInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
