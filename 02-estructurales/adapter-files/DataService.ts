// 🧾 DataService → es una regla (interfaz)=> 
// debe implementar el metodo la clase que la implementa 
// o hereda si o si ya sea interfaz o clase abstracta
// DataService NO es un objeto, es solo un tipo.
export interface DataService{
    getData(): string;
}