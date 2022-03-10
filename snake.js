class Snake {
    constructor(rows, cols, width, height) {
        this.head = createVector(1,1)
        // this.head = createVector(0,0)
        this.body = []
        this.dir = createVector(1, 0)
        this.width = width
        this.height = height
        this.check = true
        this.alive = true

        for (let i = 0; i < 1; i++) {
            this.body.push(createVector(this.head.x-1-i,this.head.y))            
            // console.log(this.body);
        }
        // console.log(this.head.x);
        // for (const p of this.body) {
        //     console.log(p.x);
        // }
        // console.log(this.body[0]);
    }
    snakeDraw(){
        this.drawHead()
        this.drawBody()
    }
    snakeUpdate() {
        this.body.unshift(deepCopy(this.head))
        this.body.pop()
        this.head.add(this.dir)
        this.check = true
        this.alive = true   
    }

    drawHead() {
        fill(255)
        rect(this.width * this.head.x, this.height * this.head.y, this.width, this.height)

    }

    drawBody(){
        let color = 0
        for (const p of this.body) {
            color++
            fill(150 - color*3)
            rect(this.width * p.x, this.height * p.y, this.width, this.height)
            // console.log(color);
        }
    }

    eatFruit(){
        this.body.push(deepCopy(this.body[this.body.length - 1]))
        fruit.respawn()
    }

    selfCollisonCheck(){
        for (const p of this.body) {
            if(JSON.stringify(p) == JSON.stringify(this.head)){
                this.alive = false
                break
            }
        }
    }
}


