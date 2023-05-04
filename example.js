let apples = 10;
let pears = 10;
let redDice1, redDice2, redDice3, blueDice1, blueDice2;

redDice1 = Math.floor(Math.random() * 6) + 1;
redDice2 = Math.floor(Math.random() * 6) + 1;
redDice3 = Math.floor(Math.random() * 6) + 1;
blueDice1 = Math.floor(Math.random() * 6) + 1;
blueDice2 = Math.floor(Math.random() * 6) + 1;

let redDices = [redDice1, redDice2, redDice3];
let blueDices = [blueDice1, blueDice2];

// finding the highest dice of red dices
let highestRedDice = Math.max(...redDices);

// finding the highest dice of blue dices
let highestBlueDice = Math.max(...blueDices);

// comparing highest red dice with highest blue dice
if (highestRedDice > highestBlueDice) {
    apples--;
    console.log("Apple removed, remaining apples: " + apples);
} else {
    pears--;
    console.log("Pear removed, remaining pears: " + pears);
}

// sorting the red dices in descending order
redDices.sort(function (a, b) { return b - a });

// sorting the blue dices in descending order
blueDices.sort(function (a, b) { return b - a });

// comparing second highest red dice with second highest blue dice
if (redDices[1] > blueDices[1]) {
    apples--;
    console.log("Apple removed, remaining apples: " + apples);
} else {
    pears--;
    console.log("Pear removed, remaining pears: " + pears);
}
