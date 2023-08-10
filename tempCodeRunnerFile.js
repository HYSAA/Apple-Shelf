let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function fruits(){
   
    for(let i=0;i<fruit.length;i++){
     if(fruit==="🍎" && fruit !=="🍊" ){
        appleShelf.textContent=fruit[i]
        console.log(fruit[i])
     }else if(fruit==="🍊" && fruit !=="🍎"){
        orangeShelf.textContent=fruit[i]
     }
    }
}

fruits()
