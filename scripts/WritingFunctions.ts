// Índice para controlar el texto actual
export let textoIndice = 0;

// Índice para controlar la posición actual en el texto
export let letraIndice = 0;

// Velocidad en milisegundos entre cada letra
export const velocidadEscritura = 100; // Puedes ajustar este valor

// Tiempo que el texto permanece en pantalla después de ser escrito (en milisegundos)
export const tiempoPermanencia = 5000; // 5 segundos

// Nombre del layout donde se debe ejecutar el efecto
export const layoutObjetivo = "Escena 2"; // Cambia esto por el nombre exacto de tu layout

// Variable para controlar el timeout activo
let timeoutID : any | null= null;

// Variable para guardar el nombre del layout actual
export let layoutActual = "";

// Variable para evitar reiniciar el efecto si ya se ha iniciado en el layout actual
export let efectoIniciado = false;

export function escribirTexto(textos: string[],runtime: IRuntime) {
console.log(textos);
    if (textoIndice < textos.length) {
        const textoActual = textos[textoIndice];
        if (letraIndice <= textoActual.length) {
            // Actualiza el texto del objeto Texto1
            const textoObjeto = runtime.objects.ItFeelsLike.getFirstInstance()!;
            textoObjeto.text = textoActual.substring(0, letraIndice);
            letraIndice++;
            // Llama a esta función de nuevo después de 'velocidadEscritura' milisegundos
            timeoutID = setTimeout(() => escribirTexto(textos, runtime), velocidadEscritura);
        } else {
            // Una vez que el texto completo se ha escrito, espera 'tiempoPermanencia' y luego pasa al siguiente
            timeoutID = setTimeout(() => {
                // Borra el texto
                const textoObjeto = runtime.objects.ItFeelsLike.getFirstInstance()!;
                textoObjeto.text = "";
                // Reinicia el índice de letras
                letraIndice = 0;
                // Pasa al siguiente texto
                textoIndice++;
                // Llama a escribirTexto de nuevo para el siguiente texto2222
                escribirTexto(textos,runtime);
            }, tiempoPermanencia);
        }
    } else {
        // Todos los textos han sido mostrados
        console.log("Se han mostrado todos los textos.");
        efectoIniciado = false; // Permitimos que el efecto se pueda reiniciar si volvemos a este layout
    }
}