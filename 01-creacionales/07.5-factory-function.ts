// Tipos de semáforos
type TipoVia = "URBANO" | "PEATONAL" | "AUTOPISTA";

// Factory function
function crearSemaforo(tipoVia: TipoVia){
  return function(mensaje: string){
    if (tipoVia === "URBANO") return console.log(`${mensaje}🚦 Semáforo URBANO: Rojo → Verde → Amarillo`);
    
    if (tipoVia === "PEATONAL") return console.log(`${mensaje}🚶‍♂️ Semáforo PEATONAL: Rojo → Verde (Caminar)`);
    
    if (tipoVia === "AUTOPISTA") return console.log(`${mensaje}🛣️ Semáforo AUTOPISTA: Verde → Amarillo → Rojo`);
    
  };
}

function main(){
  const semaforoUrbano = crearSemaforo("URBANO");
  const semaforoPeatonal = crearSemaforo("PEATONAL");
  const semaforoAutopista = crearSemaforo("AUTOPISTA");

  semaforoUrbano("muestrame:  ");
  semaforoPeatonal("ah escodigo: ");
  semaforoAutopista("Este semaforo es: ");

}

main();