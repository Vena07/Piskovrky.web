let vyhrax = 0
let vyhrao = 0 
let vyhra = 0
let b = 1
function zmena(polex) {
    let pole = document.getElementById(polex);
        if (vyhra !== 1){
            if ((pole.innerHTML !== 'O') && (pole.innerHTML !== 'X')){
            if (b === 1){pole.innerHTML = 'O'; b = b+1}
            else if (b === 2){pole.innerHTML = 'X'; b = b-1}       
            kontorla();
        }
    }
} 

function smazat(){
    let polepocet = document.getElementsByClassName("pole");
    for (let i = 0; i < polepocet.length; i++) {
        polepocet[i].innerHTML = '';
    }
    vyhra = 0;
}

function kontorla() {
    let pole1 = document.getElementById("pole1").innerHTML;
    let pole2 = document.getElementById("pole2").innerHTML;
    let pole3 = document.getElementById("pole3").innerHTML;
    let pole4 = document.getElementById("pole4").innerHTML;
    let pole5 = document.getElementById("pole5").innerHTML;
    let pole6 = document.getElementById("pole6").innerHTML;
    let pole7 = document.getElementById("pole7").innerHTML;
    let pole8 = document.getElementById("pole8").innerHTML;
    let pole9 = document.getElementById("pole9").innerHTML;
    if ((pole1 === pole2 && pole2 === pole3 && pole3 === "O") ||
    (pole4 === pole5 && pole5 === pole6 && pole6 === "O") ||
    (pole7 === pole8 && pole8 === pole9 && pole9 === "O") ||
    (pole1 === pole4 && pole4 === pole7 && pole7 === "O") ||
    (pole2 === pole5 && pole5 === pole8 && pole8 === "O") ||
    (pole3 === pole6 && pole6 === pole9 && pole9 === "O") ||
    (pole1 === pole5 && pole5 === pole9 && pole9 === "O") ||
    (pole3 === pole5 && pole5 === pole7 && pole7 === "O")) {
        vyhrao++; 
        vyhra++;
        let pocet = document.getElementById("pocetO");
        pocet.innerHTML = vyhrao; 
} 
else if ((pole1 === pole2 && pole2 === pole3 && pole3 === "X") || 
        (pole4 === pole5 && pole5 === pole6 && pole6 === "X") ||
        (pole7 === pole8 && pole8 === pole9 && pole9 === "X") ||
        (pole1 === pole4 && pole4 === pole7 && pole7 === "X") ||
        (pole2 === pole5 && pole5 === pole8 && pole8 === "X") ||
        (pole3 === pole6 && pole6 === pole9 && pole9 === "X") ||
        (pole1 === pole5 && pole5 === pole9 && pole9 === "X") ||
        (pole3 === pole5 && pole5 === pole7 && pole7 === "X")) {
            vyhrax++;       
            vyhra++;
            let pocet = document.getElementById("pocetX");
            pocet.innerHTML = vyhrax;
}  
}

function reset(){
    smazat();
}
