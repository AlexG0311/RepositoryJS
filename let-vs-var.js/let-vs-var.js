
function testLet(){
    let x = 5;
    {
        let x = 10;
        alert(x);
    }
    alert(x);

    document.getElementById("Let").innerHTML = x;
}


function testVar(){
    var x = 5;
    {
        var x = 1;
        alert(x);
    }
    alert(x);

   
}