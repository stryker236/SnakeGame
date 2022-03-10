class NeuralNetwork{
    constructor(a,b,c){
        this.input_nodes = a
        this.hidden_nodes = b
        this.output_nodes = c

        //depois alterar o type para default e o ranges de -1,1
        this.wih = tf.randomUniform([this.hidden_nodes,this.input_nodes], -10,10,"float32")
        this.who = tf.randomUniform([this.output_nodes,this.hidden_nodes], -10,10,"float32")
        // this.weights = [this.wih,this.who]

        this.wih_shape = [this.hidden_nodes,this.input_nodes]
        this.who_shape = [this.output_nodes,this.hidden_nodes]

        // this.shapes = [shapes] 
    }

    predict(input){
        let hidden = tf.sigmoid(tf.dot(this.wih,tf.tensor(input)))
        let output = tf.sigmoid(tf.dot(this.who,hidden))
        // console.log(first.print());
        // console.log(second.print());
        return output
    }
}



let a = new NeuralNetwork(3,6,4)




// console.log(a.input_nodes.toString() + " " +  a.hidden_nodes.toString() + " " + a.output_nodes.toString() );
// console.log(a.wih.print());
// console.log(a.who.print());
// console.log(a.wih_shape);
// console.log(a.who_shape);
// console.log(a.predict([1,2,3]));