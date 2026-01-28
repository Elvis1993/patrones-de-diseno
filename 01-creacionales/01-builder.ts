/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

//----------Class Producto----------
class Computer {
  public cpu: string = "cpu - not defined";
  public ram: string = "ram - not defined";
  public storage: string = "storage - not defined";
  public gpu: string = "gpu - not defined";

  //----------Metodo para mostrar la configuración del computador----------
  displayConfiguration() {
    console.log(`
        ===== Computer Configuration =====
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Storage: ${this.storage}
        GPU: ${this.gpu}
        ==================================
        `);
  }
}

//----------Class Builder----------
class ComputerBuilder {
  private computer: Computer;

  //se ejecuta cuando hago new ComputerBuilder() crea un objeto nuevo vacio 
  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }
  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }
  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }
  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

//----------Uso del patrón Builder----------
function main() {
  //si el pongo ; al final  hace referencia a una instancia de mi clase computerBuilder
  //pero como cada metodo hace referencia al this de la clase computerBuilder puedo encadenar en la definicion de nuestra clase
  const basicComputer: Computer = new ComputerBuilder()
    .setCPU("Intel Core 2 dúo")
    .setRAM("4 GB")
    .setStorage("256 GB")
    .build();

  console.log('%CComputadora básica:', COLORS.blue);
  basicComputer.displayConfiguration();

  const gamingcomputer: Computer = new ComputerBuilder()
    .setCPU("Intel Core i9")
    .setRAM("32 GB")
    .setStorage("1 TB SSD")
    .setGPU("NVIDIA GeForce RTX 4090")
    .build();

    console.log('%CComputadora para juegos:', COLORS.blue);
    gamingcomputer.displayConfiguration();
}

main();
