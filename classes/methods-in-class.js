class Auto {
    constructor(autoName, autoColor){
        this.name = autoName;
        this.color = autoColor;
    }

    mostrarText(){
        console.log("Este es el metodo de mostrar, su auto es un " + this.name + " y su color es: " + this.color);
    }
};

const auto = new Auto("Cherbrolet", "Rojo");

auto.mostrarText();


//// STATIC METHODS 

class Motos {
    constructor(motoName, motoColor){
        this.name = motoName;
        this.color = motoColor;
    }

   static mostrarText(text){
       return text;
    }
};


console.log(Motos.mostrarText("Este es un texto en la clase Motos"));



