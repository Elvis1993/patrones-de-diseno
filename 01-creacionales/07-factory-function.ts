/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */
import { COLORS } from '../helpers/colors.ts';

type Language = 'es' | 'en' | 'fr';

function createGreeder(lang: Language){
    return function (name: string){
        const messages = {
            es: `hola, %c${name}`,
            en: `hello, %c${name}`,
            fr: `bonjour, %c${name}`,
        }
        return console.log(messages[lang], COLORS.red);
    }
}

function main(){
    const spanichGreeter = createGreeder('es');
    const englishGreeter = createGreeder('en');
    const frenchGreeter = createGreeder('fr');
    spanichGreeter('Elvis');
    englishGreeter('Alice');
    frenchGreeter('Pierre');
}

main();