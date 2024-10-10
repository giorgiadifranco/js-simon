console.log('it works');

//const computerNumber = Math.floor(Math.random()*6);

//creo una funzione che contenga una variabile per inserire un array di numeri
//i numeri verranno generati da un ciclo 
function randomInt(size, maxNumber) {
    let computerNumbers = [];

    for (i = 0 ; i < 5; i++){
        
        computerNumbers.push(Math.floor(Math.random()*100));
        
    }
    return computerNumbers;
  }
  let randomArray = randomInt(size, maxNumber);
console.log(randomArray);


  
  