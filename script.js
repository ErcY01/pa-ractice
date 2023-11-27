import { albums } from './data.js';

// Write your code here

//1
albums.forEach(element => {
    //console.log(element.name)
});

//2

let totalPrice = 0;

for (let i = 0; i < albums.length; i++) {
   totalPrice += albums[i].price
}
//console.log(totalPrice);

// 3

for (let i = 0; i < albums.length; i++) {
    //console.log(albums[i].vendor.name);
}

//4

let trackCounter = 0;

for (let i = 0; i < albums.length; i++) {
    //console.log(`${albums[i].name}: ${albums[i].details.length} tracks`);
}


let tracksTotal = 0

for (let i = 0; i < albums.length; i++) {
   for (let j = 0; j < albums[i].details.length; j++) {
       tracksTotal++
   }
}

let delayTime = 301000 / tracksTotal

function timeDelay(param) {
    setTimeout(function(){
        console.log(param);
    }, param * delayTime);
}

for (let i = 0; i < albums.length; i++) {
    for (let j = 0; j < albums[i].details.length; j++) {
        //timeDelay(albums[i].details[j].name)
        
    }
}

function logWithDelay(array, delay) {
  array.forEach((element, index) => {
    setTimeout(() => {
      console.log(element);
    }, index * delay);
  });
}

// Log each element with a 5-second delay
logWithDelay(albums, delayTime);
