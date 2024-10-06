let textoIndice = 0;
let letraIndice = 0;
const velocidadEscritura = 40; // Puedes ajustar este valor
const tiempoPermanencia = 3000; // 3 segundos
let timeoutID = null;

export function escribirTexto(textos,runtime) {

    if (textoIndice < textos.length) {
        const textoActual = textos[textoIndice];
        if (letraIndice <= textoActual.length) {
            // Actualiza el texto del objeto Texto1
            const textoObjeto = runtime.objects.ItFeelsLike.getFirstInstance();
            textoObjeto.text = textoActual.substring(0, letraIndice);
			const currentAnimation=runtime.objects.Escena2fondo1.getFirstInstance().animationName;
			console.log(currentAnimation);
            letraIndice++;
            // Llama a esta función de nuevo después de 'velocidadEscritura' milisegundos
            timeoutID = setTimeout(() => escribirTexto(textos, runtime), velocidadEscritura);
        } else {
            // Una vez que el texto completo se ha escrito, espera 'tiempoPermanencia' y luego pasa al siguiente
            timeoutID = setTimeout(() => {
                // Borra el texto
                const textoObjeto = runtime.objects.ItFeelsLike.getFirstInstance();
                textoObjeto.text = "";
                // Reinicia el índice de letras
                letraIndice = 0;
                // Pasa al siguiente texto
                textoIndice++;
                // Llama a escribirTexto de nuevo para el siguiente texto
                escribirTexto(textos,runtime);
            }, tiempoPermanencia);
        }
    } else {
        // Todos los textos han sido mostrados
        console.log("Se han mostrado todos los textos.");
		textoIndice=0
    }
}