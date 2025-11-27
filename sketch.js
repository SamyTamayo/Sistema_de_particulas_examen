let sp = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(0, 0, 0, 30); 

  for (let i = 0; i < sp.length - 1; i++) {
    noFill();
    
    stroke(255, 255, 255, sp[i].tVida * 2); 
    
    line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
  }
  
  for (let i = sp.length - 1; i >= 0; i--) {
    let particula = sp[i];
    particula.update();
    particula.display();
    
    if (particula.estaMuerta) {
      sp.splice(i, 1);
    }
  }

  if (frameCount % 2 === 0) {
    sp.push(new Particula(mouseX, mouseY));
  }
}
