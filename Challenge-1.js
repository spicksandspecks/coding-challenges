// Wegleitung

// Ich kenne Javascript noch nicht. Dennoch habe ich Probiert die Aufgabe zu lösen und habe mich zuerst informiert was Arrays sind. Da ich am besten mit Videos lernen kann, suchte ich nach Tutorials. Bin schnell auf zahlreiche gute Videos gestossen. Danach habe ich probiert die Challenge zu lösen. Ich bin kein Fan davon Chatgpt als Wissenslücken füller zu benutzen. Dennoch finde ich es ein ausgezeichnetes "Korrektur Tool". Bin somit auf folgenden Code gestossen:

let array = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"];

let splitArray = [
    array.slice(0, 3),
    array.slice(3, 6),
    array.slice(6)
];

console.log(splitArray);

// Dieser funktionierte aber nicht wie die Aufgabenstellung es verlangte. Ein Kollege hat mir dann folgenden Code geschrieben und erklärt: 

console.log(output);

const input = ["elem1", "elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"];
const output = [];

for (let index in input) {
    const counter = Math.floor(index / 3);
    if (!output[counter]) output[counter] = [];
    output[counter].push(input[index]);
}

console.log(output);
