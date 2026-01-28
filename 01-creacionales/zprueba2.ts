class Ingreso {
  private cantidad: number;
  private producto: string;

  constructor() {
    this.cantidad = 5;
    this.producto = "PC";
  }

  setCantidad(cantidad: number): void {
    this.cantidad = cantidad;
  }

  setProducto(producto: string): void {
    this.producto = producto;
  }

  procesar(): string {
    return `Ingreso de ${this.cantidad} unidades del producto ${this.producto}`;
  }
}

class Egreso {
  private cantidad: number;
  private destino: string;

  constructor() {
    this.cantidad = 3;
    this.destino = "Quito";
  }

  setCantidad(cantidad: number): void {
    this.cantidad = cantidad;
  }

  setDestino(destino: string): void {
    this.destino = destino;
  }

  procesar(): string {
    return `Egreso de ${this.cantidad} unidades con destino ${this.destino}`;
  }
}

class GestionMovilizacion {
  private ingreso: Ingreso;
  private egreso: Egreso;

  constructor() {
    this.ingreso = new Ingreso();
    this.egreso = new Egreso();
  }

  setIngreso(cantidad: number, producto: string): void {
    this.ingreso.setCantidad(cantidad);
    this.ingreso.setProducto(producto);
  }

  setEgreso(cantidad: number, destino: string): void {
    this.egreso.setCantidad(cantidad);
    this.egreso.setDestino(destino);
  }

  procesarIngreso(): void {
    console.log(this.ingreso.procesar());
  }

  procesarEgreso(): void {
    console.log(this.egreso.procesar());
  }

  procesarTodo(): void {
    this.procesarIngreso();
    this.procesarEgreso();
  }
}
function main(): void {
  const gestionMovilizacion = new GestionMovilizacion();

  //hago esto solo si quiero setear los valores
  //   gestionMovilizacion.setIngreso(100, "Laptop");
  //   gestionMovilizacion.setEgreso(50, "Mall");

  gestionMovilizacion.procesarTodo();
}
main();
