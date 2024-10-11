import { escribirTexto } from "./WritingFunctions.js";

const states = [
	{ id:0, text: [ "Everything's fine..."], time: 6000,timeText: 3000 },  // 5000 ms = 5 segundos 
	{ id:1, text: ["It feels like heaven"], time: 5000, WaitMore: 2000,timeText: 3000  },     // 6000 ms = 6 segundos
	{ id:2, text: ["I see my parents..."], time: 3500, },                           // 4000 ms = 4 segundos
	{ id:3, text: null, time: 1500 } ,                                             // 3000 ms = 3 segundos
	{ id:4, text: null, time: 1500 },
	{ id:5, text:["They look happy..."], time: 4000 },
	{ id:6, text: ["They have a present for me. I wonder..."], time: 5000 },
	{ id:7,  text: null, time: 1500 },
	{ id:8, text: ["It's a cat! So sweet and pretty.","Dark as the deepest night."], time: 9000 },
	{ id:9, text: ["It's Mr. Midnight!", "My best friend..."], time: 9000 },
	{ id:10, text: ["My only friend..."], time: 4000 },
	{ id:11, text: ["We are having dinner, and I see Aunt Grace too.","I really like her a lot."], time: 10000 },
	{ id:12, text: ["It's Friday. My parents are going out..."], time: 5000 },
	{ id:13, text: ["Aunt Grace takes good care of me...", "We are having so much fun!"], time: 10000 },
	{ id:14, text: ["It's Monday night... I'm playing with Mr. Midnight."], time: 6000 },
	{ id:15, text: ["But something feels real bad..."], time: 4000 },
	{ id:16, text: null, time: 3000 },
	{ id:17, text: ["A strange creature outside my window...", "I don't like it. It scares me..."], time: 11000 },
	{ id:18, text: ["Suddenly I hear something..."], time: 5000 },
	{ id:19, text: ["It's Mom! Screaming..."], time: 5000 },
	{ id:20, text: ["I want to know what's wrong!","A bright light shines from my parents' room..."], time: 12000 },
	{ id:21, text: ["I go closer..."], time: 4000 },
	{ id:22, text: ["And closer..."], time: 4000 },
	{ id:23, text: null, time: 3000 },
	{ id:24, text: ["Mom? Dad?"], time: 4000 },
	{ id:25, text: null, time: 3000 },
	{ id:26, text: ["Please don't..."], time: 4000 },
	{ id:27, text: null, time: 3000 },
	{ id:28, text: ["Mommy... Daddy...?"], time: 4000 },
	{ id:29, text: null, time: 3000 },
	{ id:30, text: null, time: 3000 },
	{ id:31, text: null, time: 3000 },
	{ id:32, text: null, time: 3000 },
	{ id:33, text: null, time: 3000 },
	{ id:34, text: null, time: 2000 },
	{ id:35, text: null, time: 2000 },
	{ id:36, text: null, time: 2000 },
	{ id:37, text: null, time: 2000 },
	{ id:38, text: null, time: 2000 },
	{ id:39, text: null, time: 2000 },
	{ id:40, text: null, time: 2000 },
	{ id:41, text: null, time: 2000 },
	{ id:42, text: null, time: 6000 }];

globalThis.OnStartLayout = function (runtime) {
  if (runtime.layout.name === "Escena 2") {
    const fondo = runtime.objects.Escena2fondo1.getFirstInstance();
    ExecuteState(0, runtime,fondo);
  }
};

function ExecuteState(index, runtime,fondo) {
  if (index >= states.length) {
    console.log("No more states to execute.");
	runtime.goToLayout("Escena 3");

    return;}
  const state = states[index];
    console.log(`Handling state texts: ${state.text}  and index ${index}`);
    if (state.text) { escribirTexto(state.text, runtime); }

  if (index>=0) {
    if(state.WaitMore) { setTimeout(() => {console.log(`Delayed for ${state.WaitMore} second.`); fondo.setAnimation("Animation"+(index+1));}, state.WaitMore); } 
    else { fondo.setAnimation("Animation"+(index+1));}
  }



  setTimeout(() => {
    console.log(" seconds waited");
    ExecuteState((index + 1), runtime,fondo);
 }, state.time);
}