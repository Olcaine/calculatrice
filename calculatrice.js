var num = document.getElementsByClassName("number");
var affiche = document.getElementById('valeur');


for (var i = 0; i < num.length; i++) {
    num[i]
    var numVal = num[i]
    console.log(numVal)
    numVal.addEventListener('click', resultat);

}

function resultat() {
    affiche.value += this.value

}
