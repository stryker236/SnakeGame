class Fruit{
    constructor(rows,cols,width,height){
        this.pos = createVector(floor(random(0,rows)),floor(random(0,cols)))
        this.rows = rows
        this.cols = cols
        this.width = width
        this.height = height
    }

    respawn(){
        this.pos = createVector(floor(random(0,this.rows)),floor(random(0,this.cols)))
    }

    drawFruit(){
        fill(60,60,60)
        rect(this.width*this.pos.x,this.height*this.pos.y,this.width,this.height)
    }


}