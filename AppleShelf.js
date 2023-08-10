
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")
// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// // Create a function that puts the apples onto the appleShelf
// // and the oranges onto the orangeShelf. Use a for loop,
// // a conditional statement, and the textContent property.

// function fruits(){
//     fruit.sort()
   
//     for(let i=0;i<fruit.length;i++){
//      if(fruit[i]==="🍎" ){
//         appleShelf.textContent=fruit[i]
//         console.log(fruit[i])
//      }else if(fruit[i]==="🍊" ){
//         orangeShelf.textContent=fruit[i]
//      }
//     }
// }

// fruits()
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

function fruits() {
  fruit.sort();

  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += fruit[i];
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += fruit[i];
    }
  }
}

fruits();