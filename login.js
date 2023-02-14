// Crie a função login aqui.
function Login(){
nomeP=document.getElementById('playername').value; 
localStorage.setItem("nomeP",nomeP);
window.location ='gamepage.html';
}