let columns, rows;
let Earth = [];
let predators = [];
let creatures = [];
const cellsize = 20;

//tile types:
const LAND = 'land';
const WATER = 'water';
const FOOD = 'food';

function setup(){
  createCanvas(600,400);
  frameRate(5);
  
  columns = floor(width / cellsize);
  rows = floor(height / cellsize);
  
   // Initialize system with random tile types
   for (let i = 0; i < columns; i++) {
    Earth[i] = [];
    for (let j = 0; j < rows; j++) {
      // Randomly assign land, water, or food tiles initially
      let type;
     let r = floor(random(3)); 
      if (r == 0) {
        type = WATER;
      }
       else if (r == 1) {
        type = LAND;
      }    
      else {
        type = FOOD;
      }
      Earth[i][j] = new Cell(type, i * cellsize, j * cellsize, cellsize);
    }
  }
  
  
   for (let k = 0; k < 100; k++) {
    let cx = floor(random(columns));
    let cy = floor(random(rows));
    if (!Earth[cx][cy].hasCreature && !Earth[cx][cy].hasPredator) {
      creatures.push(new Creature(cx, cy));
      Earth[cx][cy].hasCreature = true;
    }
  }
  
}


function draw() {
  background(220);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      Earth[i][j].updateTile();
    }
  }

  //some code that Initializes creatures and predators here.
  // TODO Code 1
    for (let c of creatures) {
    c.update();
  }
  
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      Earth[i][j].show();
    }
  }
}
