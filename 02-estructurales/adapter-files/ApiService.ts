export class ApiService {
  fetchData(): string {
   return JSON.stringify({
      name: "Elvis",
      age: 30,
      country: "Ecuador"
    });
  }
}
