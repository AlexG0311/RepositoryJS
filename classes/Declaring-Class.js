

class Fruit {
    constructor(fruitName){
        this.name = fruitName;
    }
};

const fruit = new Fruit("Mango");


console.log(fruit.name);

/// con dos parametros 

class Auto {
    constructor(autoName, autoColor){
        this.name = autoName;
        this.color = autoColor;
    }
};



const auto1 = new Auto("Mac glaren", "Blue");
const auto2 = new Auto("mazda", "Red");


console.log(auto1);


console.log("El auto es un " + auto2.name + " y su color es de " + auto2.color );