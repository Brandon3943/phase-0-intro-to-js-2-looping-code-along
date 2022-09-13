// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


//gifts

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);
*/

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    let arr = [];
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return arr;
}

//countdown
function countDown(x) {
for (let countDown = x; countDown >= 0; countDown--) {
    console.log(countDown);
  };
}

countDown(12);