// Wegleitung

// Bei der vorherigen Challenge habe ich ein Video gesehen, bei dem genau diese Frage erklärt wurde. Somit konnte ich diese Challenge etwas schneller erledigen. Bin dann auf folgenden Code gekommen:

let array = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"];

let first = array[0];

let fromFourth = [];
for (let i = 3; i <= array.length; i += 2) {
  fromFourth.push(array[i]);
}

let combined = [first, fromFourth];

console.log(combined);

// Dieser funktionierte aber nicht. Ein Kollege hat folgenden Code geschrieben und erklärt: 

const input = [
    ["elem1", "elem2", "elem3"],
    ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"],
    ["elem2", "elem3"]
]

const map = {};

for (const array of input) {
    const uniqueValues = array.filter((item, index, self) => self.indexOf(item) === index);
    for (const element of uniqueValues) {
        !map[element] ?  map[element] = 1 : map[element] += 1;
    }
}

const output = Object.keys(map).filter(key => {
    return map[key] < input.length;
});

console.log(output);