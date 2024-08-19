function primero(Segundo){


setTimeout(() => {
    console.log("esto va de primero");
    Segundo();
}, 1000);


}

function Segundo(){

    console.log("esto va de segundo ")
    
}

primero(Segundo);


