import { COLORS } from "../helpers/colors.ts";

//una interfaz e sun contrato que deben cumplir las clases que la implementen
//para aplicar polimorfismo mismo metodo, distinto resultado -> generate()
interface Reporte {
  generate(): void;
}

class ReporteVentas implements Reporte {
  generate(): void {
    console.log("%cGenerando reporte de ventas...", COLORS.red);
  }
}

class InventarioReporte implements Reporte{
  generate(): void {
    console.log("%cGenerando reporte de inventario...", COLORS.blue);
  }
}

//clase abstracta sirve como plantilla para crear otras clases
abstract class ReporteFactory{

  //protected es solo para que las clases qeu la heredan o implementan puedan acceder a los metodos o propiedades
  //abliga a las clases hijas a implementar este metodo
  //“Quien herede de mí debe devolver algo que sea un Reporte”.
  protected abstract createReporte(): Reporte;

  generateReporte(): void{
    const reporte = this.createReporte();
    reporte.generate();
  }

}

class ReporteVentasFactory extends ReporteFactory{
  override createReporte(): Reporte {
    return new ReporteVentas();
  }
}

class InventarioReporteFactory extends ReporteFactory{
  override createReporte(): Reporte {
    return new InventarioReporte();
  }
}

function main(){
  let reporteFactory: ReporteFactory;
  const tipoReporte = prompt("¿Qué tipo de reporte deseas? (ventas/inventario)",COLORS.red);

  switch(tipoReporte){
    case "ventas":
      reporteFactory = new ReporteVentasFactory();
      break;
    case "inventario":
      reporteFactory = new InventarioReporteFactory();
      break;
    default:
      throw new Error("Tipo de reporte no soportado");
  }
  reporteFactory.generateReporte();
}

main();