const obj = {
    "firstName": "Alex",
    "lastName": "Gonzalez",
    "Age": 30,
    "isMarried": true


};


const text = JSON.stringify(obj);

document.getElementById("text").innerHTML = text;