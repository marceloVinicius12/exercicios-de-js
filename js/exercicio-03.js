function Soma(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let conta =parseFloat(numero1) + parseFloat(numero2);
    if (conta == 100)
{ 
 document.getElementById ("resultado").innerText = "igual";
}else if (conta > 100)
{
  document.getElementById("resultado").innerText = "maior";
}
else
{
    document.getElementById("resultado").innerText= "menor";
}

}












