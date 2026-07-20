function ouvrirQCM(){

document.getElementById("accueil").style.display="none";

document.getElementById("quiz").style.display="block";

afficherQuestion();

}

let score = 0;

let numero = 0;

const questions = [

{
question:"Le vaccin contre la tuberculose est :",
A:"VPO",
B:"BCG",
C:"VAR",
D:"VAT",
bonne:"B"
},

{
question:"Le paludisme est transmis par :",
A:"La mouche",
B:"Le moustique Anopheles",
C:"Le chien",
D:"Le rat",
bonne:"B"
},

{
question:"La température normale est :",
A:"35°C",
B:"36°C",
C:"37°C",
D:"39°C",
bonne:"C"
}

];

function afficherQuestion(){

document.getElementById("question").innerHTML=questions[numero].question;

document.getElementById("progression").innerHTML =
"Question " + (numero + 1) + " / " + questions.length;

document.getElementById("barre").value =
(numero / questions.length) * 100;
  
let boutons=document.getElementsByTagName("button");

boutons[0].innerHTML="A. "+questions[numero].A;

boutons[1].innerHTML="B. "+questions[numero].B;

boutons[2].innerHTML="C. "+questions[numero].C;

boutons[3].innerHTML="D. "+questions[numero].D;

}

function verifier(rep){

if(rep==questions[numero].bonne){

score++;

document.getElementById("resultat").innerHTML="✅ Bonne réponse";

}else{

document.getElementById("resultat").innerHTML="❌ Mauvaise réponse";

}

numero++;

if(numero<questions.length){

setTimeout(function(){

document.getElementById("resultat").innerHTML="";

afficherQuestion();

},1000);

}else{

setTimeout(function(){

let pourcentage = Math.round((score / questions.length) * 100);

document.body.innerHTML =
"<h1>🎉 Quiz terminé</h1>" +
"<h2>Score : " + score + " / " + questions.length + "</h2>" +
"<h2>Pourcentage : " + pourcentage + "%</h2>" +
"<button onclick='location.reload()'>🔄 Recommencer</button>";
},1000);

}

}

