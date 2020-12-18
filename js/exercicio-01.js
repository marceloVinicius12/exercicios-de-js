function Exemplo(){
document.getElementById("mensagem").innerHTML = "<b>escrevendo na tela</b>";
document.getElementById("numero").value = "teste";

console.log(document.getElementById("mensagem").innerHTML);

let numero = document.getElementById("numero").value;
console.log(numero);
}
function Trocar(){
    let numero = document.getElementById("numero").value;
 if(numero<20){
 document.getElementById("mensagem").innerText="menor que 20";

}
else if (numero==20 )
{
    document.getElementById("mensagem").innerText="igual a 20";
}
else
{
    document.getElementById("mensagem").innerText= "maior que 20";
}
}

