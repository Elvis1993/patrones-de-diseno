//Ejemplo: Impresoras por departamento
type Departamento = "SISTEMAS" | "FINANZAS" | "DIRECCION";

function crearImpresora(departamento: Departamento) {
  return function (documento: string) {
    console.log(`🖨️ Imprimiendo en ${departamento}: ${documento}`);
  };
}

function main() {
  const impresoraSistemas = crearImpresora("SISTEMAS");
  const impresoraFinanzas = crearImpresora("FINANZAS");
  const impresoraDireccion = crearImpresora("DIRECCION");

  impresoraSistemas("Reporte de errores");
  impresoraFinanzas("Factura #245");
  impresoraDireccion("Contrato firmado");
}

main();
