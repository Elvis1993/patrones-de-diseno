/******************************************************
 * EJEMPLO COMPLETO – PATRÓN ABSTRACT FACTORY
 * CASO REAL: INTERFAZ DE USUARIO (WEB / MÓVIL)
 *
 * Objetivo:
 * Crear botones e inputs sin que el código cliente
 * sepa si son de Web o de Móvil.
 ******************************************************/

/* ====================================================
   1. INTERFACES (CONTRATOS)
   ==================================================== */

/**
 * Interface Button
 * ----------------
 * Define qué debe hacer un botón.
 * No tiene lógica, solo reglas.
 */
interface Button {
  render(): void;
}

/**
 * Interface Input
 * ---------------
 * Define qué debe hacer un input.
 */
interface Input {
  render(): void;
}

/* ====================================================
   2. PRODUCTOS CONCRETOS – WEB
   ==================================================== */

/**
 * WebButton
 * ---------
 * Implementación REAL de un botón para Web.
 */
class WebButton implements Button {
  render(): void {
    console.log("Renderizando botón WEB");
  }
}

/**
 * WebInput
 * --------
 * Implementación REAL de un input para Web.
 */
class WebInput implements Input {
  render(): void {
    console.log("Renderizando input WEB");
  }
}

/* ====================================================
   3. PRODUCTOS CONCRETOS – MÓVIL
   ==================================================== */

/**
 * MobileButton
 * ------------
 * Implementación REAL de un botón para Móvil.
 */
class MobileButton implements Button {
  render(): void {
    console.log("Renderizando botón MÓVIL");
  }
}

/**
 * MobileInput
 * -----------
 * Implementación REAL de un input para Móvil.
 */
class MobileInput implements Input {
  render(): void {
    console.log("Renderizando input MÓVIL");
  }
}

/* ====================================================
   4. ABSTRACT FACTORY (CONTRATO DE FÁBRICA)
   ==================================================== */

/**
 * UIFactory
 * ---------
 * Define las reglas que toda fábrica de UI debe cumplir.
 *
 * IMPORTANTE:
 * No dice qué clase crear, solo QUÉ métodos debe tener.
 */
interface UIFactory {
  createButton(): Button;
  createInput(): Input;
}

/* ====================================================
   5. FÁBRICAS CONCRETAS
   ==================================================== */

/**
 * WebUIFactory
 * ------------
 * Fábrica que crea SOLO componentes WEB.
 */
class WebUIFactory implements UIFactory {
  createButton(): Button {
    // Se crea y devuelve un botón Web
    return new WebButton();
  }

  createInput(): Input {
    // Se crea y devuelve un input Web
    return new WebInput();
  }
}

/**
 * MobileUIFactory
 * ---------------
 * Fábrica que crea SOLO componentes MÓVILES.
 */
class MobileUIFactory implements UIFactory {
  createButton(): Button {
    return new MobileButton();
  }

  createInput(): Input {
    return new MobileInput();
  }
}

/* ====================================================
   6. CÓDIGO CLIENTE (NO SABE QUÉ SE CREA)
   ==================================================== */

/**
 * main
 * ----
 * Función que usa la fábrica.
 * NO sabe si es Web o Móvil.
 */
function main(factory: UIFactory) {
  // Se solicita un botón a la fábrica
  const button = factory.createButton();

  // Se solicita un input a la fábrica
  const input = factory.createInput();

  // Se usan los objetos creados
  button.render();
  input.render();
}

/* ====================================================
   7. PUNTO DE ENTRADA (DECISIÓN ÚNICA)
   ==================================================== */

// Simula el entorno donde corre la aplicación
const platform = "web"; // "web" | "mobile"

// Variable que puede contener cualquier fábrica válida
let factory: UIFactory;

// Se decide UNA SOLA VEZ qué fábrica usar
if (platform === "web") {
  factory = new WebUIFactory();
} else {
  factory = new MobileUIFactory();
}

// Se ejecuta la aplicación
main(factory);

/******************************************************
 * FIN DEL EJEMPLO
 ******************************************************/
