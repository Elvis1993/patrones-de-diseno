class Contract {
  constructor(
    public title: string,
    public client: string,
    public amount: number,
    public clauses: string[],
  ) {}

  clone(): Contract {
    return new Contract(this.title, this.client, this.amount, [
      ...this.clauses,
    ]);
  }

  print() {
    console.log(`
      Title: ${this.title}
      Client: ${this.client}
      Amount: $${this.amount}
      Clauses: ${this.clauses.join(", ")}
      `);
  }
}

function main() {
  const contract = new Contract("contrato base", "cliente generico", 1000, [
    "pago en 30 dias",
    "confidencialidad",
    "soporte basico",
    "tiempo de prueba"
  ]);

  const contract2 = contract.clone();
  ((contract2.client = "luis perez"),
    (contract2.amount = 2500),
    contract2.clauses.push("periodo de prueba","segundo objeto"),
    contract.print());
  contract2.print();
}

main();
