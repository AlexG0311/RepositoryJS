
class Animal {
    constructor(nombreAnimal){
        this.name = nombreAnimal;
    }

    eat(){
        return "Comer";
    }
}

class Cat extends Animal{

    constructor(nombreAnimal){
        super(nombreAnimal);
    }
    
    speak(){
        return "Corre a 30km ";
    }
}

const cat = new Cat("Petrona");

console.log("Tu gato se llama " + cat.name + " ella " + cat.speak() + "a ella le gusta " + cat.eat());