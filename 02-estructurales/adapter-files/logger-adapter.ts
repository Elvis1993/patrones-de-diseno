import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter

interface ILogerAdapter{
    file: string;

    writeLog: (message: string) => void;
    writeError: (message: string) => void;
    writeWarning: (message: string) =>void;

}

export class DenoLoggerAdapter implements ILogerAdapter{
    
  public file: string;
  private logger = new Logger();

  constructor(file: string){
    this.file = file;
  }

  writeLog(message: string){
    this.logger.info(`[${this.file} Log] ${message}`);
  }
  writeError(message: string){
    this.logger.warn(`[${this.file} warning] ${message}`);
  }
  writeWarning(message: string){
    this.logger.error(`[${this.file} error] ${message}`);
  }

}