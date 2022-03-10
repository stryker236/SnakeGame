class GeneticAlgoritm{
    constructor(pop){
        this.pop = pop //array
        //definir individuos
        //criterio fitness/
    }
    //receber dois individuos da classe neuralnetwork
    //partindo do principio que a rede tem i - h - o
    static crossover(p1,p2){
        let combinations1 = []
        let combinations2 = []
        let a1 = p1.wih.arraySync()
        let a2 = p2.wih.arraySync()
        let b1 = p1.who.arraySync()
        let b2 = p2.who.arraySync()

        //estou a assumir que estou a pegar invididuos com a mesma tipo de rede
        console.log("Valores iniciais dos individuos");
        p1.wih.print()
        p2.wih.print()
        console.log(" ");
        p1.who.print()
        p2.who.print()
        console.log(" ");
        

        //arranjar pares disitintos
        //apenas uso para p1 porque estou a assumir que têm as mesmas dimensoes
        //posso fazer uma função so para este loop
        combinations1 = generateDistinctPars(5,p1.wih_shape[0],p1.wih_shape[1])
        combinations2 = generateDistinctPars(5,p1.who_shape[0],p1.who_shape[1])

        //fazer o crossover propriamente dito
        //posso fazer disto uma só função

        swapIndexes(a1,a2,combinations1)
        swapIndexes(b1,b2,combinations2)

        p1.wih = tf.tensor(a1)
        p2.wih = tf.tensor(a2)
        p1.who = tf.tensor(b1)
        p2.who = tf.tensor(b2)
        

        console.log("Valores finais dos individuos");
        p1.wih.print()
        p2.wih.print()

        p1.who.print()
        p2.who.print()
    }

    static mutation(p){
        let delta_wih = tf.randomUniform([p.wih_shape[0],p.wih_shape[1]])
        let delta_who = tf.randomUniform([p.who_shape[0],p.who_shape[1]])
        let pih = tf.cast(p.wih,"float32")
        let pho = tf.cast(p.who,"float32")
        delta_wih.print()
        delta_who.print()


        console.log("antes da mutação");
        pih.print()
        pho.print()
        console.log(" ");
        console.log("depois da mutação");
        pih = tf.add(p.wih,delta_wih)
        pho= tf.add(p.who,delta_who)
        
        pih.print()
        pho.print()
    }
}

let p1 = new NeuralNetwork(3,3,3)
let p2 = new NeuralNetwork(3,3,3)
let genetic = new GeneticAlgoritm()

// GeneticAlgoritm.crossover(p1,p2)
GeneticAlgoritm.mutation(p1)

//matrizes teste de weigth (uma camada de hidden layer)
let b = [tf.randomUniform([3,3],undefined,10,"int32"),tf.randomUniform([3,3],undefined,10,"int32")]
let c = [tf.randomUniform([3,3],undefined,10,"int32"),tf.randomUniform([3,3],undefined,10,"int32")]


// b.forEach(e => console.log(e.print()))
// console.log(" ");
// c.forEach(e => console.log(e.print()))

// b.forEach(e => console.log(e.dataSync()))
// console.log(" ");
// c.forEach(e => console.log(e.arraySync()))

// console.log(p1.who_shape);

