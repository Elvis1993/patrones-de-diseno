// singleton_file_logger.ts

class Logger {

  private static instance: Logger;
  private logs: string[] = [];
  private filePath = "D:/logs/app_logs.txt"; // Ruta en disco D

  private constructor() {}

  //hay una instancia compartida para toda la clase
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public async log(message: string): Promise<void> {
    const entry = `[${new Date().toISOString()}] ${message}`;
    this.logs.push(entry);
    console.log(entry);

    // Guardar en archivo (agrega sin borrar lo anterior)
    const dir = this.filePath.substring(0, this.filePath.lastIndexOf("/"));
    await Deno.mkdir(dir, { recursive: true }); // crea la carpeta si no existe

    await Deno.writeTextFile(this.filePath, entry + "\n", { append: true });
  }

  public getLogs(): string[] {
    return this.logs;
  }
}

// ---------- MAIN ----------
async function main() {
  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();

  await logger1.log("Sistema iniciado");
  await logger2.log("Usuario autenticado");
  await logger1.log("Proceso terminado");

  console.log("\n¿Es la misma instancia?");
  console.log(logger1 === logger2); // true
}

main();
