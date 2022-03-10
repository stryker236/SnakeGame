class Grid{
    constructor(rows,cols,width,height){
        this.rows = rows
        this.cols = cols
        this.width = width
        this.height = height
    }

    drawGrid(){
        strokeWeight(2)
        for (let i = 1; i < this.rows; i++) {
            line(0,this.height/this.rows*i,this.width,this.height/this.rows*i)
        }       
        for (let i = 1; i < this.cols; i++) {
            line(this.width/this.cols*i,0,this.width/this.cols*i,this.height)
        }     

    }
}