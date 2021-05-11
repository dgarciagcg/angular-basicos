import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports : [
        ListadoComponent
    ],
    imports: [ // Aqui adentro van solo modulos
        CommonModule // CommonModule Ofrece modulos como el ngif y el ngfor
    ]
    
})

export class HeroesModule {

}