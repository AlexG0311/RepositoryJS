document.addEventListener("DOMContentLoaded", function() {
    const text = `{
        "firstName": "Alex",
        "lastName": "Gonzalez",
        "Age": 30,
        "isMarried": true
    }`;

    const obj = JSON.parse(text);

    document.getElementById("obj").innerHTML = obj.firstName + " " + obj.lastName;
});
