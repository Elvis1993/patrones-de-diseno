import { COLORS } from "../helpers/colors.ts";
class QueryBuilder{
    
    private table: string;
    private fields: string[] = [];
    private conditions: string[] = [];
    private orderFields: string[] = [];
    private limitcount?: number;

    constructor(table: string){
        this.table = table;
    }

    select(...fields: string[]): QueryBuilder{
        this.fields = fields;
        return this;
    }

    where(condition: string):QueryBuilder{
        this.conditions.push(condition);
        return this;
    }

    orderBy(orderFields: string, direction: "ASC" | "DESC" = "ASC"): QueryBuilder{
        this.orderFields.push(`${orderFields} ${direction}`);
        return this;
    }

    limit(limitcount: number): QueryBuilder{
        this.limitcount = limitcount;
        return this;
    }

    execute():string{

        const fields = this.fields.length > 0 ? this.fields.join(", ") : "*";

        const whereClause = this.conditions.length > 0 ? ` where ${this.conditions.join(" and ")}` : "";

        const orderByclause = this.orderFields.length > 0 ? ` ORDER BY ${this.orderFields.join(", ")}`: "";

        const limitClause = this.limitcount ? ` LIMIT ${this.limitcount}` : "";

        return `Select ${fields} from ${this.table} ${whereClause} ${orderByclause} ${limitClause};`;
    }

}

function main(){
    const userQuery = new QueryBuilder("users")
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

    console.log("%Consulta:", COLORS.red);
    console.log(userQuery);
}

main();