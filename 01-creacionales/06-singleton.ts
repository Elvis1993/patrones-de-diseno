/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls{

    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor(){
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls{
        if(!DragonBalls.instance){
            DragonBalls.instance = new DragonBalls()
        }
        return DragonBalls.instance;
    }

    collectBall():void{
        if(this.ballsCollected < 7){
            this.ballsCollected++;
            console.log(`Pelotas recolectadas:  ${this.ballsCollected}`);
            return;
        }
        console.log(`ya se han recolectado todas las esferas del dragon`);
    }

    summonShenlong(){
        if(this.ballsCollected === 7){
            console.log(`pide tu deseo`);
            this.ballsCollected = 0;
            return;
        }
        console.log(`aun faltan ${7 - this.ballsCollected} pelotas para llamar a shenlong`);
    }
}

function main(){
    const gokuGragonBalls = DragonBalls.getInstance();
    gokuGragonBalls.collectBall();
    gokuGragonBalls.collectBall();
    gokuGragonBalls.collectBall();
    gokuGragonBalls.collectBall();

    const vegetaDragonBalls = DragonBalls.getInstance();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();

    gokuGragonBalls.summonShenlong();
    vegetaDragonBalls.summonShenlong();
}

main();

