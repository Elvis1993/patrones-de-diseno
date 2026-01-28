class ServicioIngreso{
    private cantidad: number;
    private producto: string;
    
    constructor (cantidad: number, producto: string){
        this.cantidad = cantidad;
        this.producto = producto;
    }

    procesar(): string{
        return `ingreso de ${this.cantidad} unidades del producto ${this.producto} `;
    }
}

class ServicioEgreso{
    private cantidad: number;
    private destino: string;

    constructor(cantidad:number, destino:string){
        this.cantidad = cantidad;
        this.destino = destino;
    }

    procesar(): string{
        return `Egreso de ${this.cantidad} unidades con destino ${this.destino}`;
    }
}

class GestionMovilizacion{
    private ingreso : ServicioIngreso;
    private egreso :  ServicioEgreso;

    constructor(ingreso: ServicioIngreso, egreso: ServicioEgreso){
        
        this.ingreso = ingreso;
        this.egreso = egreso;
    }

    procesarIngreso(): void{
        console.log(this.ingreso.procesar());
    }

    procesarEgreso():void{
        console.log(this.egreso.procesar());
    }

    procesartodo(): void{
        this.procesarIngreso();
        this.procesarEgreso();
    }
}

const ingreso = new ServicioIngreso(100, 'Pollos');
const egreso = new ServicioEgreso(50, 'Mercado Central');

const gestionMovilizacion = new GestionMovilizacion(ingreso, egreso);
gestionMovilizacion.procesartodo();