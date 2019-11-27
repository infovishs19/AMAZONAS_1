
var rondonia;
var mattogrosso;
var para;
var maranhao;

var regions = [];
var regionIndex = 0;

let img;
function preload() {
    img = loadImage('Amazonas_Illustartion_3_Linien_1.png');
}

//ignore first and last cells
//make ruleset function
function setup() {
    createCanvas(7680, 1080);

    //create a cellular autoamta for rondonia
    //gridWidth = 60
    //gridHeight = 40
    //limit = 100 (the maximum number of activated cells)
    //color = '#ff0000'
    var cellSizePixels = 20;
    var rodoniaWidthPixels = 400;

    //x und y position des CellularAutomata
    var rodoniaX = 0;
    var rodoniaY = 0;
    rondonia = new CellularAutomata("Rondonia", rodoniaX, rodoniaY, rodoniaWidthPixels, height, cellSizePixels, 1253, 'grey', 'red', 'blue');

    var mattogrossoWidthPixels = 200;
    var mattogrossoX = 400;
    var mattogrossoY = 0;
    mattogrosso = new CellularAutomata("Matto Grosso", mattogrossoX, mattogrossoY, mattogrossoWidthPixels, height, cellSizePixels, 3293, 'grey', 'red');

    // para = new CellularAutomata("Para", 760, 108, 4057, 'grey','red');
    // maranhao = new CellularAutomata("Maranhao", 760, 108, 1419, 'grey','red');

    //make a list of all regions
    regions.push(rondonia);
    regions.push(mattogrosso);
    // regions.push(para);
    // regions.push(maranhao);
    frameRate(10);
}

function draw() {
    background(0);
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img, 0, 0);

    //update and draw all regions
    for (var i = 0; i < regions.length; i++) {
        regions[i].update();
        regions[i].draw();
    }

}

// mouse press to change the value of a grid cell
function mousePressed() {

    //each mouse click activates another region
    for (var i = 0; i < regions.length; i++) {
        regions[i].mousePressed(mouseX, mouseY);
    }

}

