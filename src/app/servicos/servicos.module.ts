import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosFormComponent } from './servicos-form/servicos-form.component';
import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';
import { ServicosRoutingModule } from './servicos.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ServicosFormComponent, ServicosListaComponent],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    FormsModule
  ],
  exports: [
    ServicosFormComponent,
    ServicosListaComponent
  ]
})
export class ServicosModule { }
