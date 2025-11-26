let sp = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // 1. DIBUJAR EL FONDO (¡Ahora SÍ funciona!)
  // Fondo negro semi-transparente para crear el rastro (el efecto que te gusta)
  background(0, 0, 0, 30); 

  // 2. DIBUJAR LAS LÍNEAS DE CONEXIÓN
  for (let i = 0; i < sp.length - 1; i++) {
    noFill();
    
    // Línea BLANCA que se desvanece
    stroke(255, 255, 255, sp[i].tVida * 2); 
    
    line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
  }
  
  // 3. ACTUALIZAR Y MOSTRAR PARTÍCULAS
  for (let i = sp.length - 1; i >= 0; i--) {
    let particula = sp[i];
    particula.update();
    particula.display();
    
    if (particula.estaMuerta) {
      sp.splice(i, 1);
    }
  }

  // 4. CREAR NUEVA PARTÍCULA
  let np = new Particula(mouseX, mouseY);
  sp.push(np);
}

