
const myFunc = () => {
    alert("Hola mundito");
};


/// Podemos omitir {}

const myFunc2 = () => aler("Hola mundito");


// parametros en los ()



const myFunc3 = (x, y) => alert(x + y);

// if you have one parameter, you can omit the parameter ()


const myFunc4 = Corozal => alert("I live in: " + Corozal);

////////// Arrow in a function of form incorrect 

const boton = document.getElementById("btn");

const chaneStyle1 = () => {
    this.style.background = "blue";
    this.syle.color = "White";
};

boton.onclick = function(){
    changeStyle1();
};


////////// Arrow in a function of form correct4

const btn = document.getElementById("btno");

btn.onclick = function(){

const chaneStyle = () =>{
    this.style.background = "Blue";
    this.style.color = "White";
}
chaneStyle();

};


