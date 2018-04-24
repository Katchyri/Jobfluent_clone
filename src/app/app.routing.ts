import {Router, RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { FormComponent } from './form/form.component';
import { TrabajoInfoComponent } from './trabajo-info/trabajo-info.component';

const APP_ROUTER : Routes = [
    {path:'', redirectTo : 'trabajo', pathMatch : 'full'},
    {path : 'trabajo', component : ListaTrabajosComponent},
    {path : 'form', component : FormComponent},
    {path : 'trabajos/:id', component : TrabajoInfoComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTER);