import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent { // OnInit es el primer ciclo de vida de angular

  heroes: string[] = ['Hulk', 'Goku', 'Thor', 'Charizar'];
  heroeBorrado: string = "";


  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || ''; // borra el primer elemento de la lista y lo retorna
    
    console.log(this.heroeBorrado);
    // this.heroes.splice(0,1); // splice sirve para borrar en un rango
  }

  // constructor() { // se ejecuta antes de la renderizacion
  //   console.log('constructor');
  // }

  // ngOnInit(): void { // se utiliza para inicializar cosas(petcion, servicio)
  //   console.log('ngOnInit')
  // }

}
