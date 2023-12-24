// sketch.js

const socket = io('http://localhost');

let players = [];
socket.on("heartbeat", players => updatePlayers(players));

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  
  // Update and draw each player
  players.forEach(player => {
    player.draw();   // Draw player on the canvas
    console.log(player)
  });
}

function updatePlayers(serverPlayers) {
  let removedPlayers = players.filter(p => serverPlayers.findIndex(s => s.id == p.id));
  for (let player of removedPlayers) {
    removePlayer(player.id);
  }
  for (let i = 0; i < serverPlayers.length; i++) {
    let playerFromServer = serverPlayers[i];
    if (!playerExists(playerFromServer)) {
      players.push(new Player(playerFromServer));
    }
  }
}

function playerExists(playerFromServer) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].id === playerFromServer) {
      return true;
    }
  }
  return false;
}

function removePlayer(playerId) {
  players = players.filter(player => player.id !== playerId);
}
