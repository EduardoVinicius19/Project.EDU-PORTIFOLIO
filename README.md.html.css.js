<!DOCTYPE html>
<html>
<head>   
<style>   
/* Estilos para telas pequenas */
@media (max-width: 767px) {
/* Estilos para telas menores que 768 pixels */
.container {
  padding: 10px;}
}
/* Estilos para telas médias */
@media (min-width: 768px) and (max-width: 1023px) {
/* Estilos para telas entre 768 e 1023 pixels */
.container {
  padding: 20px;}
}
/* Estilos para telas grandes */
@media (min-width: 1024px) {
/* Estilos para telas maiores que 1024 pixels */
.container {
  padding: 30px;}
}
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
#typing-animation {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 10s steps(52, end);
}
.background {
  background-image: url("imagemVSCODE/fundo-site.edu.gif");
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
img {
  max-width: 100%;
  height: auto;
}
.imagem {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.aba {
  display: none;
}
.aba:target {
  display: block;
}
.menu {
  margin-bottom: 35px;
}
.menu :hover{
  background-color: #00f7ff;
  color: #000000;
}
.menu a {
  background-color: #000000;
  color: #00f7ff;
  border: none;
  padding: 12px 24px;
  margin: 5px;
  padding: 25px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 0 10px #00ccff;
  transition: transform 0.3s ease;
}
span{
  text-align: center;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  color: #fff;
}
p, span, a {
  font-family: 'Inconsolata', monospace;
}
li{
  color: #fff;
}
p {
  text-align: center;
  text-decoration-color: #fff;
  color: #fff;
}
body {
  font-family: 'Roboto', sans-serif;
  background-color: #000000;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.header img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 20px;
}
.about {
  margin-top:0 auto;
}
.social {
  display: flex;
  justify-content: center;
  margin-top:40px;
}
button {
  color: white; 
  border: none; 
  padding: 25px 26px; 
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 16px; 
  margin: 0 auto; 
  cursor: pointer; 
  border-radius: 50px; 
}
.btn-email{
  background-color: #000000;
  color: #fff;
  border: none;
  margin: 4px 10px;
  padding: 25px 26px;
  border-radius: 200px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 0 10px #ff0000;
  transition: transform 0.3s ease;
}
.btn-email:hover{
  background-color: #ff0000;
  box-shadow: 0 0 10px #ff0000;
  transform: scale(1.1);
}
.btn-github {
  background-color: #000000;
  color: #fff;
  border: none;
  margin: 4px 10px;
  padding: 25px 26px;
  border-radius: 200px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 0 10px #885e99;
  transition: transform 0.3s ease;
}
.btn-github:hover {
  background-color: #222222;
  box-shadow: 0 0 10px #452d4d;
  transform: scale(1.1);
}
.btn-whatsapp {
  background-color: #000000;
  color: #fff;
  border: none;
  margin: 4px 10px;
  padding: 25px 26px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 0 10px #00d146;
  transition: transform 0.3s ease;
}
.btn-whatsapp:hover {
  background-color: #00c040;
  box-shadow: 0 0 10px #00c040;
  transform: scale(1.1);
}
.btn-instagram {
  background-color: #000000;
  color: #fff;
  border: none;
  margin: 4px 2px;
  padding: 25px 26px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 0 10px #C13584;
  transition: transform 0.3s ease;
}
.btn-instagram:hover {
  background-color: #a72e72;
  transform: scale(1.1);
}
.btn-linkedin {
  background-color: #030303;
  color: #fff;
  border: none;
  margin: 4px 2px;
  padding: 25px 26px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 0 10px #008cd8;
  transition: transform 0.3s ease;
}
.btn-linkedin:hover {
  background-color: #046293;
  box-shadow: 0 0 10px #046293;
  transform: scale(1.1);
}
.clock {
  font-size: 2em;
  font-family: Arial, sans-serif;
  color: #00e1ff;
  background-color: #00000000;
  padding: 10px;
  border-radius: 50px;
  box-shadow: 0 0 10px #00ccff;
}
</style>
</head>

  <title>Eduardo-Portifolio</title>
<link rel="stylesheet" type="text/css" href="estilo.css">
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet">
<div class="background"></div>
<br>
<span id="relogio" class="clock"></span>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
<body>
</div>
<div class="header">
  <h1 id="typing-animation">Eduardo Vinicius</h1>
  <p>Designer Front-End Developer</p>
<div class="image-container">
  <img src="imagemVSCODE/foto-site.edu.jpeg" alt="Minha Imagem">
</div>
<p></p>
<p></p>
<div class="menu" class="menu-fundo">
  <a href="#aba1">Soft Skills</a>
  <a href="#aba2">Experiência</a>
  <a href="#aba3">Estudo</a>
  <a href="#aba4">Projetos</a> </div>
<div class="aba" id="aba4"><br>
  <h2>Meus projetos</h2>
  <li>Este portifólio</li>
  <li><a href="calculadora,projeto.edu.html" target="_blank" class="botao">Calculadora</a></li>
</div>
<div class="aba" id="aba1"><br>
  <h2>Social</h2>
    <ul>
      <li>boa comunicação.</li>
      <li>proatividade.</li>
      <li>resolução de conflitos.</li>
      <li>capacidade de trabalhar sob pressão.</li>
      <li>sendo de liderança.</li>
      <li>capacidade analitica.</li>
  <h2>Hard Skills</h2>
      <li>ingles basico.</li>
      <li>conhecimento na operação de softweres de edição de texto/imagem.</li>
      <li>conhecimento de logica de programação.</li>
      <li>facil desenvolvimento na programação.</li>
      <li>cursos associados a tecnologia.</li>
      <li>conhecimento de excel, word, dentre outras ferramentas do office 365.</li>
    </ul>
</div>
<div class="aba" id="aba2"><br>
  <span> <p><br>&#9785; a procura de novas oportunidades &#9785;</p></span>
</div>
<div class="aba" id="aba3"><br>
  <h2>Faculdade: UNIP</h2>
    <ul>
      <li>Ciência da Computação.</li>
      <li>Criação de jogos (UNITY).</li>
      <li>Arduino.</li>
      <li>Programação estruturada.</li>
      <li>Logica de programação.</li>
    </ul>
  <h2>Curso: HELP DESK</h2>
    <ul>
      <li>Phyton, SQL.</li>
      <li>Comportamento social.</li>
      <li>Palestras.</li>
    </ul>
  <h2>Curso: EXCEL</h2>
    <ul>
      <li>Criação e edição de tabela.</li>
      <li>Conceitos basicos de codigo de tabela.</li>
      <li>Telas de Dashboard.</li>
    </ul>
  <h2>Curso: ALURA</h2>
    <ul>
      <li>Logica de programação.</li>
      <li>UI Design, Design System, UX Writing.</li>
      <li>Html e css.</li>
    </ul>
  <h2>Curso: BRADESCO</h2>
    <ul>
      <li>Fundamentos de Lógica de Programação.</li>
      <li>Postura e Imagem Profissional.</li>
      <li>Linguagem de Programação Java - Básico.</li>
      <li>Introdução ao JavaScript.</li>
    </ul>
</div>
<div class="about">
<div class="social">
  <a href="https://github.com/EduardoVinicius19" target="_blank" class="btn-github">
    <i class="fab fa-github"></i>
  </a>
  <a href="https://www.linkedin.com/in/seulinkedin" class="btn-linkedin" target="_blank">
    <i class="fab fa-linkedin"></i>
  </a>
  <a href="https://api.whatsapp.com/send?phone=seunumerodetelefone" class="btn-whatsapp" target="_blank">
    <i class="fab fa-whatsapp"></i></a>
  <a href="https://www.instagram.com/bonnie_97658" target="_blank" class="instagram-link">
    <button class="btn-instagram">
    <i class="fab fa-instagram"></i> 
    </button>
  </a>
  <a href="mailto:eduardoviniciusribeiro19@gmail.com" target="_blank" class="email-link">
    <button class="btn-email">
    <i class="far fa-envelope"></i> 
    </button>
  </a>
</div>
<script>
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
</script>
<script>
  const whatsappBtn = document.querySelector('.btn-whatsapp');
  whatsappBtn.addEventListener('click', function() {
  window.open('https://api.whatsapp.com/send?phone=seunumerodetelefone');
});
</script>
<script>
  const linkedinBtn = document.querySelector('.btn-linkedin');
  linkedinBtn.addEventListener('click', function() {
  window.location.href = 'https://www.linkedin.com/in/eduardo-vinícius-a26895244/';
});
</script>
<script>
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
</script>
</body>
</html>
