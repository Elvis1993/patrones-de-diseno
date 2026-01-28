// ===============================
// 1 INTERFAZ (contrato)
// ===============================
// Todas las peticiones HTTP deben poder ejecutarse
interface HttpRequest {
  execute(): void;
}

// ===============================
// 2 IMPLEMENTACIONES CONCRETAS
// ===============================

class GetRequest implements HttpRequest {
  execute(): void {
    console.log("Ejecutando petición GET");
  }
}

class PostRequest implements HttpRequest {
  execute(): void {
    console.log("Ejecutando petición POST");
  }
}

class DeleteRequest implements HttpRequest {
  execute(): void {
    console.log("Ejecutando petición DELETE");
  }
}

// ===============================
// 3 FACTORY METHOD (FÁBRICA)
// ===============================

abstract class HttpRequestFactory {

  // Factory Method
  // Obliga a las clases hijas a decidir QUÉ objeto crear
  protected abstract createRequest(): HttpRequest;

  // Método común que usa el objeto creado
  sendRequest(): void {
    const request = this.createRequest();
    request.execute();
  }
}

// ===============================
// 4 FÁBRICAS CONCRETAS
// ===============================

class GetRequestFactory extends HttpRequestFactory {
  protected createRequest(): HttpRequest {
    return new GetRequest();
  }
}

class PostRequestFactory extends HttpRequestFactory {
  protected createRequest(): HttpRequest {
    return new PostRequest();
  }
}

class DeleteRequestFactory extends HttpRequestFactory {
  protected createRequest(): HttpRequest {
    return new DeleteRequest();
  }
}

// ===============================
// 5 USO REAL (como en una app)
// ===============================

function main() {
  let factory: HttpRequestFactory;

  const method = "POST"; // podría venir de config, formulario, API, etc.

  switch (method) {
    case "GET":
      factory = new GetRequestFactory();
      break;
    case "POST":
      factory = new PostRequestFactory();
      break;
    case "DELETE":
      factory = new DeleteRequestFactory();
      break;
    default:
      throw new Error("Método HTTP no soportado");
  }

  // El código NO sabe qué clase concreta se creó
  factory.sendRequest();
}

main();
