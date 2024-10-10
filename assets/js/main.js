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
  let randomArray = randomInt();
console.log(randomArray);

//inserire randomArray in un output(innerHTML)
//creare una costante che mi permetta di richiamare il tag html

const numBox_aEL = document.getElementById("numbox");

numBox_aEL.innerHTML = randomArray.join(',');

console.log(numBox_aEL);

//

  
  