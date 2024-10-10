console.log('it works');

//const computerNumber = Math.floor(Math.random()*6);

//creo una funzione che contenga una variabile per inserire un array di numeri
//i numeri verranno generati da un ciclo 



function randomInt() {
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

//creare una timing function dove inserire i numeri



function putTheNumber(){

    let boxNumber = `<form class="row g-3">
        <div class="col-auto">
            <label for="" class="visually-hidden">Insersci i 5 numeri</label>
            </div>
        <div class="col-auto">
            <label for="inputNumber" class="visually-hidden">Password</label>
            <input type="number" class="form-control" id="inputNumber" placeholder="">
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Conferma</button>
        </div>
        </form>`

        document.querySelector("formcontainer").innerHTML = boxNumber

        //console.log(boxNumber);
        


}
setTimeout(putTheNumber, 5000);

  