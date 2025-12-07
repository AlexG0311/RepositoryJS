// HACE REFERENCIA A LA MISMA CLASE


const persona = {

    name: "Alex",
    apellido: "Gonzalez",
    edad: 21,

    Saludar: function(){
  document.getElementById("this").innerHTML = "My name is " + this.name +
  " and my apellido is: " + this.apellido;
    }
};


persona.Saludar();



////////// This keyword inside a function represents the global object 

var city = "Corozal";
function myFunction (){
    var x = this;
    x.alert("I want to go to " + x.city);

};



////////// this in an event 

const btn = document.getElementById("btn");

btn.onclick = function(){

    this.style.background = "Red";
    this.style.color = "White";
    


};




