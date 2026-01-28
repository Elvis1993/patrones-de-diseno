class Ingreso{
    private cantidad!: number;
    private producto!: string;

    constructor(){

    }

    setCantidad(cantidad: number): void{
        this.cantidad = cantidad;
    }

    setProducto(producto: string):void{
        this.producto = producto;
    }

    procesar():string{
        return`Ingreso de ${this.cantidad} unidades del producto ${this.producto}`;
    }
}

class Egreso{
    private cantidad!: number;
    private destino!: string;

    constructor(){}

    setCantidad(cantidad: number):void{
        this.cantidad = cantidad;
    }

    setDestino(destino: string):void{
        this.destino = destino;
    }

    procesar(): string{
         return `Egreso de ${this.cantidad} unidades con destino ${this.destino}`;
    }
}

class GestionMovilizacion{
    private inggreso!: Ingreso;
    private egreso!: Egreso;

    constructor(){}

    setIngreso(ingreso: Ingreso):void{
        this.inggreso = ingreso;
    }

    setEgreso(egreso: Egreso):void{
        this.egreso = egreso;
    }

    procesarIngreso(): void{
        console.log(this.inggreso.procesar());
    }

    procesarEgreso():void{
        console.log(this.egreso.procesar());
    }

    procesarTodo():void{
        this.procesarIngreso();
        this.procesarEgreso();
    }
}

const ingreso = new Ingreso();
ingreso.setCantidad(5);
ingreso.setProducto("PC");

const egreso = new Egreso();
egreso.setCantidad(3);
egreso.setDestino("Quito");

const gestionMovilizacion = new GestionMovilizacion();
gestionMovilizacion.setIngreso(ingreso);
gestionMovilizacion.setEgreso(egreso);

gestionMovilizacion.procesarTodo();