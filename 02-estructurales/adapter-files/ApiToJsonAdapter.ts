import { DataService } from "./DataService.ts";
import { ApiService } from "./ApiService.ts";

export class ApiToJsonAdapter implements DataService {
  constructor(private apiService: ApiService) {}

  getData(): string {
    const data = this.apiService.fetchData();

    // aquí podrías transformar si hiciera falta
    return data;
  }
}
