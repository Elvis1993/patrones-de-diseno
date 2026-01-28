import { COLORS } from "../helpers/colors.ts";

/*
  1) INTERFAZ
  Define un contrato.
  Cualquier clase que implemente Reporte
  DEBE tener el método generate()
*/
interface Reporte {
  generate(): void;
}

/*
  2) CLASE CONCRETA
  Implementa la interfaz Reporte
*/
class ReporteVentas implements Reporte {
  generate(): void {
    console.log("%cGenerando reporte de ventas...", COLORS.red);
  }
}

/*
  3) OTRA CLASE CONCRETA
  También implementa Reporte
*/
class InventarioReporte implements Reporte {
  generate(): void {
    console.log("%cGenerando reporte de inventario...", COLORS.blue);
  }
}

/*
  4) CLASE ABSTRACTA (FÁBRICA)
  No se puede instanciar
  Sirve como plantilla para otras fábricas
*/
abstract class ReporteFactory {

  /*
    Este método OBLIGA a las clases hijas
    a crear y devolver algo que sea Reporte
  */
   protected abstract createReporte(): Reporte;

  /*
    Este método es común para todas las fábricas
    Aquí está la lógica principal
  */
  generateReporte(): void {
    const reporte = this.createReporte();
    reporte.generate();
  }
}

/*
  5) FÁBRICA CONCRETA PARA REPORTE DE VENTAS
*/
class ReporteVentasFactory extends ReporteFactory {

  /*
    Implementa el método obligatorio
  */
  override createReporte(): Reporte {
    return new ReporteVentas();
  }
}

/*
  6) FÁBRICA CONCRETA PARA REPORTE DE INVENTARIO
*/
class InventarioReporteFactory extends ReporteFactory {

  override createReporte(): Reporte {
    return new InventarioReporte();
  }
}

/*
  7) FUNCIÓN PRINCIPAL
  Punto de entrada del programa
*/
function main() {

  // Variable que puede contener CUALQUIER fábrica de reportes
  let reporteFactory: ReporteFactory;

  // Pregunta al usuario
  const tipoReporte = prompt(
    "¿Qué tipo de reporte deseas? (ventas/inventario)",
    COLORS.red
  );

  // Decide qué fábrica usar
  switch (tipoReporte) {
    case "ventas":
      reporteFactory = new ReporteVentasFactory();
      break;

    case "inventario":
      reporteFactory = new InventarioReporteFactory();
      break;

    default:
      throw new Error("Tipo de reporte no soportado");
  }

  // Ejecuta la lógica sin saber qué reporte es
  reporteFactory.generateReporte();
  
}

// 8) EJECUCIÓN DEL PROGRAMA
main();
