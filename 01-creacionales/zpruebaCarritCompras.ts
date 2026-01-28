class Producto {
  private nombre: string;
  private precio: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setPrecio(precio: number): void {
    this.precio = precio;
  }

  getNombre(): string {
    return this.nombre;
  }

  getPrecio(): number {
    return this.precio;
  }

  mostrarInfoProducto(): void {
    console.log(`Producto: ${this.nombre} | Precio: $${this.precio}`);
  }
}

class Cliente {
  private nombre: string;
  private id: number;

  constructor(nombre: string, id: number) {
    this.nombre = nombre;
    this.id = id;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setId(id: number): void {
    this.id = id;
  }

  mostrarInfoCliente(): void {
    console.log(`Cliente: ${this.nombre} | ID: ${this.id}`);
  }
}

class Carrito {
  private cliente: Cliente;
  private productos: Producto[] = [];

  constructor(cliente: Cliente) {
    this.cliente = cliente;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    console.log(`Producto agregado: ${producto.getNombre()}`);
  }

  mostrarCarrito(): void {
    console.log("\n=== Carrito de Compras ===");
    this.cliente.mostrarInfoCliente();

    let total = 0;

    for (const producto of this.productos) {
      producto.mostrarInfoProducto();
      total += producto.getPrecio();
    }

    console.log(`Total a pagar: $${total}`);
  }
}

function main(): void {
  const cliente = new Cliente("Elvis", 23);

  const producto1 = new Producto("Café", 23.2);
  const producto2 = new Producto("Chocolate", 10);
  const producto3 = new Producto("Banana", 13.2);

  const carrito = new Carrito(cliente);

  carrito.agregarProducto(producto1);
  carrito.agregarProducto(producto2);
  carrito.agregarProducto(producto3);

  carrito.mostrarCarrito();
}

main();
