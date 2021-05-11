import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'Manolo';
    edad: number = 25;

    get nombreCapitalizado(): string {// get Crear propiedad que cuando la llame va ser procesada

        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return ` ${ this.nombre } - ${ this.edad }`;
        // return this.nombre + ' - ' + this.edad.toString();
    }

    cambiarNombre(): void {
        this.nombre = 'Raquel';
    }
    cambiarEdad(): void { // void no regresa nada
        this.edad = 53;
    }

}