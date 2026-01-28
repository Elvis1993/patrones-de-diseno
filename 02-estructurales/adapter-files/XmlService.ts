// 🧱 XmlService → clase que devuelve XML
//simula un servicio real que voy a consumir
//  (puede ser una API, un web service, una librería externa, otro sistema, etc.) que no lo puedo cambiar
//tiene métodos con nombres que tú no quieres usar o no conoces y viene de un proveedor externo
export class XmlService {
  getXml(): string {
    return `<user>
              <id>1</id>
              <name>Elvis</name>
            </user>`;
  }
}
