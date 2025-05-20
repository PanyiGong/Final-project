let columns, rows;
let Earth = [];
let predator= [];
let creature = [];
const cellsize = 20;

//tile types:
const LAND = 'land';
const WATER = 'water';
const FOOD = 'food';

function setup(){
  createCanvas(400,400);
  frameRate(10);
  
  columns = floor(width / cellsize);
  rows = floor(height / cellsize);
  
   // Initialize board with random tile types
   for (let i = 0; i < columns; i++) {
    Earth[i] = [];
    for (let j = 0; j < rows; j++) {
      // Randomly assign land, water, or food tiles initially
      let type;
      let r = random(3);
      if( r == 0){
        type = water;
      }
      else if(r == 1){
        type = LAND;
      }
      else{
        type = FOOD;
      }
      Earth[i][j] = new Cell(type, i * cellsize, j * cellsize, cellsize);
    }
  }
  
}

