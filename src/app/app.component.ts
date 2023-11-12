import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokedexEvaluableAlejandroGarcia';
// creamos el pokemon[]
// y en cada posicion se va metiendo la informacion del pokemon
  pokemons = [
    {imagen : '../assets/img/025.png', nivel: 70, nombre: 'Pikachu',tipo : 'Rayo',  info:'Onda Trueno',  descripcion : 'Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado' },
    {imagen : '../assets/img/029.png', nivel: 50, nombre: 'Nidoran',tipo : 'Veneno',  info:'Picotazo Venenoso',  descripcion : 'Lanza una moneda. Si sale cara, el Pokémon Defensor pasa a estar Envenenado' },
    {imagen : '../assets/img/004.png', nivel: 70, nombre: 'Charmander ',tipo : 'Fiego',  info:'Colmillo Ígneo',  descripcion : 'El Pokémon Activo de tu rival pasa a estar Quemado.' },
    {imagen : '../assets/img/006.png', nivel: 150, nombre: 'Charizard',tipo : 'Fuego',  info:'Rugido Decisivo',  descripcion : 'Una vez durante tu turno (antes de tu ataque), puedes poner 2 contadores de daño en este Pokémon.' },
    {imagen : '../assets/img/009.png', nivel: 100, nombre: 'Blastoise ',tipo : 'Agua',  info:'Hidro Bomba',  descripcion : 'Hace 40 puntos de daño más otros 10 puntos por cada Energía' },
    {imagen : '../assets/img/042.png', nivel: 80, nombre: 'Golbat ',tipo : 'Veneno',  info:'Aliento Supervenenoso',  descripcion : 'El Pokémon Activo de tu rival pasa a estar Envenenado.' },
    {imagen : '../assets/img/001.png', nivel: 60, nombre: 'Bulbasaur  ',tipo : 'Planta', info:'Hiedra adormidera',  descripcion : 'El Pokémon Defensor pasa a estar Dormido.' },
    {imagen : '../assets/img/010.png', nivel: 60, nombre: 'Caterpie ',tipo : 'Planta', info:'Siesta',  descripcion : 'Cura 20 puntos de daño a este Pokémon.' },
    {imagen : '../assets/img/011.png', nivel: 80, nombre: 'Metapod  ',tipo : 'Planta', info:'Defensa Férrea',  descripcion : 'Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.' }
  ]

  // colores de fondo para las tarjetas
  coloresDeFondo = ['pikachu', 'nidoran', 'charmander', 'charizard', 'blastoise', 'golbat', 'bulbasaur', 'caterpie', 'metapod'];
}
