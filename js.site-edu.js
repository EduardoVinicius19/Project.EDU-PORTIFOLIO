function 
  atualizarHora() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();
    horas = adicionaZero(horas);
    minutos = adicionaZero(minutos);
    segundos = adicionaZero(segundos);
    document.getElementById('relogio').innerHTML = horas + ":" + minutos + ":" + segundos;
   setTimeout(atualizarHora, 1000);
}
function adicionaZero(numero) {
  if (numero < 10) {
   return "0" + numero;
} 
  else {
  return numero;
}
}
  atualizarHora();


  const whatsappBtn = document.querySelector('.btn-whatsapp');
  whatsappBtn.addEventListener('click', function() {
  window.open('https://api.whatsapp.com/send?phone=seunumerodetelefone');
});


  const linkedinBtn = document.querySelector('.btn-linkedin');
  linkedinBtn.addEventListener('click', function() {
  window.location.href = 'https://www.linkedin.com/in/eduardo-vinícius-a26895244/';
});


  var abas = document.getElementsByClassName('aba');
  var links = document.getElementsByTagName('a');
  var abaAtual = null;
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
  var target = document.querySelector(this.getAttribute('href'));
  toggleAba(target);});
}
function toggleAba(target) {
  if (abaAtual !== null && abaAtual !== target) {
    abaAtual.style.display = 'none';
}
  if (target.style.display === 'none') {
    target.style.display = 'block';
} 
  else {
  target.style.display = 'none';
}
  abaAtual = target;
}
  document.addEventListener('DOMContentLoaded', function() {
  var abas = document.getElementsByClassName('aba');
  for (var i = 0; i < abas.length; i++) {
  abas[i].style.display = 'none';}
});