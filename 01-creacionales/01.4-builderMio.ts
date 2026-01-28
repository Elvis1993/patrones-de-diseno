// Builder → el constructor es importante
/**************************************************
 * OBJETO FINAL QUE SE VA A CONSTRUIR
 **************************************************/
//es un molde una plantilla
class HttpRequest {
  url!: string;                              // Obligatoria
  method: string = "GET";                    // Valor por defecto
  headers: Record<string, string> = {};      // Headers opcionales
  body?: unknown;                            // Body opcional
}

/**************************************************
 * BUILDER
 * Construye el HttpRequest paso a paso
 **************************************************/
 
class FetchBuilder {

  private request: HttpRequest;
  /*
    Se crea un espacio nuevo en memoria, por ejemplo:
    request ──▶ {
    url: undefined
    method: "GET"
    headers: {}
    body: undefined
    }
    “Esta clase tendrá una variable llamada request
    que apuntará a un HttpRequest”
 */

  constructor() {
    // Se crea el objeto vacío al iniciar el FetchBuilder
    this.request = new HttpRequest();
  }

  setUrl(url: string): FetchBuilder { //: FetchBuilder, es el tipo de retorno del método, permite encadenar metodos
    this.request.url = url;
    return this; // Permite encadenar métodos, devuelve la misma instancia para seguir armando
  }

  setMethod(method: string): FetchBuilder {
    this.request.method = method.toUpperCase();
    return this;
  }

  //Record<string, string> = Record es un tipo genérico de TypeScript -> Record<Clave, Valor>
  setHeaders(headers: Record<string, string>): FetchBuilder {
    this.request.headers = headers;
    return this;
  }

  setBody(body: unknown): FetchBuilder {
    this.request.body = body;
    return this;
  }

  build(): HttpRequest {
    // Validación mínima
    if (!this.request.url) {
      throw new Error("La URL es obligatoria para ejecutar la petición");
    }

    return this.request;
  }
}

/**************************************************
 * EJECUCIÓN PRINCIPAL
 **************************************************/
function main() {

  // 1)Se crea el builder y se construye la request paso a paso

  const request = new FetchBuilder()
    .setUrl("/api/users")
    .setMethod("POST")
    .setHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer TOKEN_FAKE"
    })
    .setBody({
      name: "Juan",
      email: "juan@email.com"
    })
    .build();

  // 3) Se usa el objeto final
  console.log("REQUEST CONSTRUIDA:", request);

  // 4) Ejemplo de uso con fetch (opcional)
  /*
  fetch(request.url, {
    method: request.method,
    headers: request.headers,
    body: JSON.stringify(request.body)
  });
  */
}

// 5) Inicio del programa
main();
