  //variaveis bolinha
  let xBolinha = 300;
  let yBolinha = 200;
  let diametroBolinha = 13;

  // variaveis velocidade
  let velocidadeXbolinha = 6;
  let velocidadeYbolinha = 6;
  let raio = diametroBolinha / 2;
  
  //variaveis da raquete
  let xRaquete = 2;
  let yRaquete = 150;
  let larguraRaquete = 10;
  let alturaRaquete = 90;

//variaveis da raquete oponente
  let xRaqueteOponente = 588;
  let yRaqueteOponente = 150;
  let velocidadeYOponenete;

  let colidiu = false
  
  //placar
  let pontos = 0;
  let pontosOponente = 0;

  //sons
  let raquetada;
  let ponto;
  let trilha;

  let chanceDeErrar = 0;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}
  


function setup() {
  createCanvas(600, 400);
  trilha.loop();
    
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentoBolinha ();
  colisaoBolinha ();
  mostraRaquete (xRaquete, yRaquete);
  movimentoRaquete ();
  //verificaçãoColisãoRaquete ();
  colisãoRaqueteBiblioteca (xRaquete, yRaquete);
  colisãoRaqueteBiblioteca (xRaqueteOponente, yRaqueteOponente)
  mostraRaquete (xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente ()
  placar ()
  marcarPontos()
  
  
}

function mostraBolinha (){
  circle (xBolinha, yBolinha, diametroBolinha);
  
}

function movimentoBolinha (){
  xBolinha += velocidadeXbolinha
  yBolinha += velocidadeYbolinha
  
}

function colisaoBolinha (){
  if (xBolinha + raio > width || xBolinha - raio < 0) {velocidadeXbolinha *= -1}
  if (yBolinha + raio > height || yBolinha - raio < 0) {velocidadeYbolinha *= -1}
  
}

function mostraRaquete (x, y){
  rect (x, y, larguraRaquete, alturaRaquete)
  
}

function movimentoRaquete (){
  if (keyIsDown (UP_ARROW)&& yRaquete > 0){yRaquete -= 10}
  if (keyIsDown (DOWN_ARROW)&& yRaquete < height - alturaRaquete){yRaquete += 10}
  
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete /2 - 89;
  
  
  yRaqueteOponente += velocidadeYOponente
  
}

function verificaçãoColisãoRaquete () {
  if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {velocidadeXbolinha *= -1; raquetada.play();} 
  
  
}

function colisãoRaqueteBiblioteca(x, y){
    colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu){velocidadeXbolinha *= -1; raquetada.play();}
  
      
} 

function placar (){
  textAlign(CENTER);
  textSize (25);
  fill(color(255, 140, 0));
  rect(130, 2, 40, 30);
  fill(255);
  text (pontos, 150, 26);
  fill(color(255, 140, 0));
  rect(430,2,40,30);
  fill(255);
  text (pontosOponente, 450, 26);
}

function marcarPontos(){
  if(xBolinha > 590){pontos += 1; ponto.play()};
  if(xBolinha < 8){pontosOponente += 1; ponto.play()};
  
}



