
let x = 10;

const myInterval = setInterval(function(){

    x+= 10;

    document.getElementById("p").innerHTML = x;
},1000);


/// podemos eliminar el interval asi 

clearInterval("name_interval");