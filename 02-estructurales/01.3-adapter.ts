/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 * Lo que entendiste correctamente

        ✅ DataService define el contrato
        “Esto es lo que mi aplicación espera”
        ✅ El Adapter traduce
        XML → JSON
        métodos viejos → métodos modernos
        ✅ App no conoce XmlService
        App solo sabe usar getData()
 */

import { DataService } from "./adapter-files/DataService.ts";
import { XmlService } from "./adapter-files/XmlService.ts";
import { XmlToJsonAdapter } from "./adapter-files/XmlToJsonAdapter.ts";
import { ApiService } from './adapter-files/ApiService.ts';
import { ApiToJsonAdapter } from "./adapter-files/ApiToJsonAdapter.ts";

//clase para poder implementarla
class App{
    run(service: DataService){//“run acepta cualquier objeto que tenga un método getData()”
        console.log("Datos recibidos:", service.getData());
    }
}

const app = new App();
//implementacion de las clases
const xmlService = new XmlService();//instanciamos un objeto de tipo XmlService (clase)
const adapter = new XmlToJsonAdapter(xmlService);//Le pasas como argumento el objeto xmlService al adapter.
app.run(adapter);//“Cuando yo (App) ejecute run, me tienes que pasar un objeto que tenga una función llamada getData()”

const apiService = new ApiService();
const apiAdapter = new ApiToJsonAdapter(apiService);
app.run(apiAdapter);

/**
 * PASOS DEL PATRÓN ADAPTER
 *
 * 1. Se crea una interfaz o clase abstracta (DataService),
 *    la cual define el contrato que la aplicación necesita.
 *    En este caso, obliga a que exista el método getData().
 *
 * 2. La clase App NO conoce implementaciones concretas.
 *    App recibe una instancia de DataService, por lo tanto
 *    acepta cualquier objeto que cumpla con ese contrato
 *    (que tenga el método getData()).
 *
 * 3. Existe un servicio externo o legacy (XmlService)
 *    que devuelve datos en un formato incompatible (XML)
 *    y que NO implementa la interfaz DataService.
 *
 * 4. Se crea la clase Adapter (XmlToJsonAdapter),
 *    que IMPLEMENTA la interfaz DataService y el metodo getData() (obligatorio).
 *
 * 5. El Adapter recibe en su constructor un objeto de tipo
 *    XmlService, para poder comunicarse con él.
 *
 * 6. Dentro del método getData(), el Adapter llama a los
 *    métodos del XmlService y TRADUCE o ADAPTA la información
 *    al formato que la App espera.
 *
 * 7. Finalmente, se pasa una instancia del Adapter a la App.
 *    La App cree que está trabajando con un DataService,
 *    pero en realidad está usando un XmlService adaptado.
 */

/**
 *  por que crear otro adapter
 * SRP -> Una clase debe tener una sola razón para cambiar.
 * OCP-Open/Close -> El sistema debe estar abierto a extensión, pero cerrado a modificación.
 * Un adapter = traductor
 * Un traductor solo habla un idioma.
 * ❌ Un traductor que:
 * “a veces traduce japonés, a veces árabe, a veces ruso”
 * ✔ Es mejor:
 * Traductor Japonés → Españo
 * Traductor Árabe → Españo
 * Traductor Ruso → Español
 * Cada uno con su responsabilidad clara.
 * un adaptador por servicio te da bajo acoplamiento y alta disponibilidad
 * Cohesión = qué tan relacionadas están las responsabilidades de una clase.
 * Acoplamiento = cuánto depende una clase de otra.
 */

