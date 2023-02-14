// geração do valor aleatório
var y= Math.floor(Math.random()* 10 + 1 ) 
var x =0 
var guess=0
playername=localStorage.getItem('nomeP')
function subm(){
    x = document.getElementById("guis").value;
    if(x==y)
    {
        alert("PARABENS!!!"+playername+",VOCE ACERTOU EM"+ guess+"TENTATIVAS(S)!");
        guess=1;

    }
     if(x > y){
        guess++
        alert("OPA,RESPOSTA ERRADA!! TENTE UM NUMERO MENOR")
    }
     if(x < y){
        guess++
        alert("OPA,RESPOSTA ERRADA!! TENTE UM NUMERO MAIOR")
    }

}
function playAgain(){
    y=Math.floor(Math.random()* 10+1)
}
// contagem de tentativas
// até acerto    
  
// função para o número enviado pelo usuário
