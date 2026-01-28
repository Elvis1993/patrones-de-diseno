// 🔌 XmlToJsonAdapter → clase que adapta XML → JSON
import { DataService } from "./DataService.ts";
import { XmlService } from './XmlService.ts';

export class XmlToJsonAdapter implements DataService{
    constructor(private xmlService: XmlService){}

    getData(): string {
      const xml = this.xmlService.getXml();
      return JSON.stringify({
        id: 1,
        name: "Elvis"
      });
    }
    
}

