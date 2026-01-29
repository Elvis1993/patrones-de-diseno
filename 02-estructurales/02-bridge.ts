/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

import { COLORS } from "../helpers/colors.ts";
//“Cualquier que implemente habilidad DEBE tener un método use()”.
interface Ability {
  use(): void;
}

//clases que tienen implementado el metodo use()
class SwordAttack implements Ability {
  use(): void {
    console.log("ATaca con una espada ferozmente");
  }
}

//clases que tienen implementado el metodo use()

class AxeAttack implements Ability {
  use(): void {
    console.log("ATaca con una hacha brutalmente");
  }
}

//clases que tienen implementado el metodo use()

class MagicSpell implements Ability {
  use(): void {
    console.log("Lanza un hechizo magico poderoso");
  }
}

//clases que tienen implementado el metodo use()

class FireBallSpell implements Ability {
  use(): void {
    console.log("Lanza una bola de fuego");
  }
}

  //Esta es la clase de puente (character ni sabe como se ataca solo sabe que tiene algo que cumple Ability) plantilla
abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  setAbility(ability: Ability): void {
    this.ability = ability;
  }

  abstract performAbility(): void;
}

//clases concretas (no saben si es SwordAttack, AxeAttack solo dicen this.ability.use())
class Warrior extends Character {
  override performAbility(): void {
    console.log("El guerrero esta listo para luchar");
    this.ability.use();
  }
}

//clases concretas (no saben si es MagicSpell, FireBallSpell solo dicen this.ability.use())
class Mage extends Character {
  override performAbility(): void {
    console.log("EL mago prepara su magia");
    this.ability.use();
  }
}

function main() {
  const warrior = new Warrior(new SwordAttack());
  warrior.performAbility();

  warrior.setAbility(new AxeAttack());
  warrior.performAbility();

  const mage = new Mage(new MagicSpell());
  mage.performAbility();
}

main();
