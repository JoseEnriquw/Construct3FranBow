import { escribirTexto} from "./WritingFunctions.js";

// Lista de textos que quieres mostrar
const StatesScene2 = {
  FirstImg: 'FirstImg',
  SecondImg: 'SecondImg',
  ThirdImg: 'ThirdImg',
  FourthImg: 'FourthImg'
};

const textImg1=[
    "Everything's fine...",
    "It feels like heaven"
	]

const textImg2=[
	"i see my parents...",
	"They look happy..."
	]


export function OnStartLayout(runtime : IRuntime){
  

if(runtime.layout.name==="Escena 2"){
const myObject=runtime.objects.Escena2fondo1.getFirstInstance()!;

// Obtener el valor de una variable de instancia
const variableValue = myObject.instVars.State;
console.log(variableValue);
ExecuteState(variableValue,runtime)

}
}

function ExecuteState(variableValue : string,runtime: IRuntime){
 	switch(variableValue) { // Asumiendo que 'runtime.state' es la variable que quieres comparar
    case StatesScene2.FirstImg:

		setTimeout(() => {
			console.log("5 Segundo esperado")
			ExecuteState(StatesScene2.SecondImg,runtime)
			escribirTexto(textImg1,runtime)
		}, 5000);

	  
      console.log('Handling FirstImg');
      break;

    case StatesScene2.SecondImg:
      // Código para manejar el caso SecondImg
	  const fondo=runtime.objects.Escena2fondo1.getFirstInstance()!;
	  fondo.setAnimation("Animation2");
	  escribirTexto(textImg2,runtime)
      console.log('Handling SecondImg');
      break;

    case StatesScene2.ThirdImg:
      // Código para manejar el caso ThirdImg
      console.log('Handling ThirdImg');
      break;

    case StatesScene2.FourthImg:
      // Código para manejar el caso FourthImg
      console.log('Handling FourthImg');
      break;

    default:
      // Código para manejar cualquier caso no definido
      console.log('Unknown state');
  }
}