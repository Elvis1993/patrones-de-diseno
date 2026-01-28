import { COLORS } from "../helpers/colors.ts";
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger{
    prepare(): void;
}

//-------------creamos nuestras hamburguesas concretas-------------
class chickenHamburger implements Hamburger{
    prepare(): void {
      console.log("Preparing chicken hamburger",COLORS.yellow);
    }
}

class beefHamburger implements Hamburger{
    prepare(): void {
        console.log("Preparing beef hamburger",COLORS.red);
    }   
}

class frijolHamburger implements Hamburger{
    prepare(): void {
        console.log("Preparing frijol hamburger",COLORS.pink);
    }   
}

//una calse abstracta me sirve para definir el esqueleto de otras clases que la hereden
//tiene el super poder de evitar que yo la pueda instanciar directamente asi const rest = new Restaurant()
abstract class Restaurant{

    protected abstract createHamburger(): Hamburger;

    orderHamburger(): void{
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

//-------------creamos nuestro restaurant de pollo-------------
class ChickenRestaurant extends Restaurant{
    override createHamburger(): Hamburger {
        return new chickenHamburger();
    }   
}

//-------------creamos nuestro restaurant de res-------------
class BeefRestaurant extends Restaurant{
    override createHamburger(): Hamburger {
        return new beefHamburger();
    }   
}

//-------------creamos nuestro restaurant de frijol-------------
class FrijolRestaurant extends Restaurant{
    override createHamburger(): Hamburger {
        return new frijolHamburger();
    }   
}

function main(){

    let restaurant: Restaurant;

    const burgerType = prompt("qué tipo de hamburgesa quieres? (chicken/beef/frijol)")?.toLowerCase();

    switch(burgerType){
        case "chicken":
            restaurant = new ChickenRestaurant();
            break;
        case "beef":
            restaurant = new BeefRestaurant();
            break;
         case "frijol":
            restaurant = new FrijolRestaurant();
            break;
        default:
            console.log("Tipo de hamburguesa no válido");
            return;
    }

    restaurant.orderHamburger();
}

main()