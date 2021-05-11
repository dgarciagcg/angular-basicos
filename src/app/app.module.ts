import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModule } from './contador/contador.modulo';

@NgModule({
  declarations: [ // Aqui ponemos los componentes
    AppComponent
  ],
  imports: [ // Aqui van los modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [ // Aqui van lo servicios especificos a un modulo

  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
