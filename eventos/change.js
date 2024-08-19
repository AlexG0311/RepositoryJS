
const selec = document.getElementById("city");

selec.addEventListener("change", function(){

    const val = document.getElementById("city").value;

    document.getElementById("demo").innerHTML = val;


});