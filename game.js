
WIDTH = 500
HEIGHT = 500
SIDE = 10
ROWS = SIDE
COLS = SIDE
FPS = 20
let slider;

let fruitEaten = 0
let diedTimes = 0
let frameNumber = 0

let grid;
let snake;
let fruit;

function setup() {
    frameRate(FPS)
    slider = createSlider(1,20,5)
    grid = new Grid(ROWS, COLS, WIDTH, HEIGHT)
    snake = new Snake(ROWS, COLS, WIDTH / ROWS, HEIGHT / COLS)
    fruit = new Fruit(ROWS, COLS, WIDTH / ROWS, HEIGHT / COLS)
    createCanvas(WIDTH, HEIGHT)
    background(255, 221, 0)
    
    grid.drawGrid()
    fruit.drawFruit()
    snake.snakeDraw()
}
function draw() {
    let val = slider.value()
    frameRate(val)
    background(255, 221, 0)
    updating()
    grid.drawGrid()
    fruit.drawFruit()
    snake.snakeDraw()
    displayText()
    frameNumber++
}
function updating() {
    let c = 0
    eatFruitCheck()
    while (!FruitRespawnSucess()) {
        fruit.respawn()
        c++
        console.log("Falhas ao spawnar fruta " + c.toString() + "vezes");
    }
    collisionCheck()
    snake.snakeUpdate()
}

function keyPressed() {
    if (snake.check) {
        switch (key) {
            case "w":
                if (snake.dir.y == 0)
                    snake.dir = createVector(0, -1)
                snake.check = false
                break;
            case "s":
                if (snake.dir.y == 0)
                    snake.dir = createVector(0, 1)
                snake.check = false
                break;
            case "a":
                if (snake.dir.x == 0)
                    snake.dir = createVector(-1, 0)
                snake.check = false
                break;
            case "d":
                if (snake.dir.x == 0)
                    snake.dir = createVector(1, 0)
                snake.check = false
            default:
                break;
        }

    }


}


function eatFruitCheck() {
    if (JSON.stringify(snake.head) == JSON.stringify(fruit.pos)) {
        snake.eatFruit()
        fruitEaten++
    }
}

function collisionCheck() {
    snake.selfCollisonCheck()
    borderCollisionCheck()
    // console.log(snake.alive);
    if (!snake.alive) {
        snake = undefined
        snake = new Snake(ROWS, COLS, WIDTH / ROWS, HEIGHT / COLS)
        diedTimes++

    }
}

function borderCollisionCheck() {
    if (snake.head.x >= COLS || snake.head.x < 0
        || snake.head.y >= ROWS || snake.head.y < 0) {
        snake.alive = false
    }
}


function FruitRespawnSucess() {
    for (const p of snake.body) {
        if(JSON.stringify(fruit.pos) == JSON.stringify(p)){
            return false
        }
    }
    return true
}

function displayText() {
    textSize(60)

    text(fruitEaten,0,60)
    text(diedTimes,WIDTH/2-textWidth(diedTimes)/2,60)
    text(frameNumber,WIDTH-textWidth(frameNumber.toString()),60)
}