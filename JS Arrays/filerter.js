const numbers = [1,2,3,4,5];

const newArr = number. filter(function(value){
    return value < 4;
});

document.getElementById("demo").innerHTML += newArr;

