class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 2));

    this.tVida = int(random(100, 300));
    this.tVidaInicial = this.tVida;
    this.estaMuerta = false;

    this.diam = random(30, 80);

    this.velAng = random(-0.1, 0.1);

    const paleta = [
      color(255, 0, 150),
      color(255, 100, 200),
      color(150, 50, 200),
      color(200, 150, 250),
    ];

    this.c = paleta[floor(random(paleta.length))];
  }

  update() {
    if (!this.estaMuerta) {
      this.vel.rotate(this.velAng);
      this.tVida -= 1;
      this.pos.add(this.vel);
    }

    if (this.tVida <= 0 && !this.estaMuerta) {
      this.estaMuerta = true;
    }
  }

  display() {
    noStroke();

    this.diamF = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
    let alpha = map(this.tVida, 0, this.tVidaInicial, 0, 255);

    push();
    translate(this.pos.x, this.pos.y);

    this.c.setAlpha(alpha);
    fill(this.c);
    circle(0, 0, this.diamF);

    this.c.setAlpha(alpha * 0.1);
    fill(this.c);
    circle(0, 0, this.diamF * 1.2);

    pop();
  }
}


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
