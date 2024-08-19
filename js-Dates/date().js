/// hay 4 tipos de construtores de date() 
// primero es date()

const date = new Date();

document.getElementById("date").innerHTML = date;

// segundo new Date(milliseconds)

const milliseconds = new Date();

document.getElementById("date").innerHTML = milliseconds;

// tercero new Date(dateString)

const dateString = new Date("june 04, 2000");

// cuarto new Date(year, monthindex, day, hours, minutes, seconds)

const dat = new Date(2000, 5, 4, 18, 30, 20, 0);



