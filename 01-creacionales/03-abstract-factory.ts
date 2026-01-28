/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class chickenHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparing chicken hamburger");
  }
}

class beefHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparing beef hamburger");
  }
}

class Water implements Drink{
    pour(): void {
        console.log("Pouring water");
    }
}

class Soda implements Drink{
    pour(): void {
        console.log("Pouring soda");
    }
}

interface RestaurantFactory{
    createHamburger(): Hamburger;
    createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory{
    createHamburger(): Hamburger {
        return new beefHamburger();
    }

    createDrink(): Drink {
        return new Soda();
    }
}
class HealtyFoodRestaurantFactory implements RestaurantFactory{
    createHamburger(): Hamburger {
        return new chickenHamburger();
    }
    createDrink(): Drink {
        return new Water();
    } 
}

function main(factory: RestaurantFactory){
    const hambuerger = factory.createHamburger();
    const drink = factory.createDrink();

    hambuerger.prepare();
    drink.pour();
}


console.log('Pedido del menú saludable: ');

main(new HealtyFoodRestaurantFactory());

