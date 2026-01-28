class TanqueAgua{
  
  private static tanqueUnico: TanqueAgua;

  private constructor(){
    console.log("tanque conectado a la red");
  }

  //devuelve un objeto de tipo TanqueAgua
  public static getTanque(): TanqueAgua{
    if(!TanqueAgua.tanqueUnico){
      TanqueAgua.tanqueUnico = new TanqueAgua();
    }
    return TanqueAgua.tanqueUnico;
  }
}

function main(){
  const dpto1 = TanqueAgua.getTanque();
  const dpto2 = TanqueAgua.getTanque();

  console.log(dpto1 === dpto2)
}

main();