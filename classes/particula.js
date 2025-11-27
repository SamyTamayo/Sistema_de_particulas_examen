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

    this.ang = random(0, 360);      
    this.velRot = random(-0.1, 0.1);

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
      this.ang += this.velRot;
    }

    if (this.tVida <= 0 && !this.estaMuerta) {
      this.estaMuerta = true;
    }
  }

  display() {
    stroke(255, 30);
    strokeWeight(1);

    let diamF = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
    let alpha = map(this.tVida, 0, this.tVidaInicial, 0, 255);

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.ang);

    rectMode(CENTER);

    this.c.setAlpha(alpha);
    fill(this.c);
    square(0, 0, diamF);

    this.c.setAlpha(alpha * 0.15);
    fill(this.c);
    square(0, 0, diamF * 1.3);

    pop();
  }
}
