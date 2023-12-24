// Player.js

class Player {
  constructor(id) {
    this.x = Math.random() * 800 + 1;
    this.y = Math.random() * 800 + 1;
    this.id = id;

    this.rgb = {
      r: Math.random() * 255,
      g: Math.random() * 255,
      b: Math.random() * 255,
    }
  }

  // Add a draw method to render the player
  draw() {
    console.log("test")

    const targetX = mouseX; // Get the x-coordinate of the mouse
    const targetY = mouseY; // Get the y-coordinate of the mouse

    // Move towards the mouse
    const dx = targetX - this.x;
    const dy = targetY - this.y;
    const speed = 5; // Adjust the speed as needed

    // Normalize the direction vector
    const distance = Math.sqrt(dx * dx + dy * dy);
    const normalizedDx = dx / distance;
    const normalizedDy = dy / distance;

    // Move the player towards the mouse
    this.x += normalizedDx * speed;
    this.y += normalizedDy * speed;


    fill(this.rgb.r, this.rgb.g, this.rgb.b);
    ellipse(this.x, this.y, 30, 30);
  }
}

module.exports = Player;
