
function modify(array, callback){

// hacer algo   

array.push('midu')

// despues de hacer algo 

setTimeout(function (){

callback(array)

    }, 2000)
}


const names = ['alex', 'sebas', 'oscar']


modify(names, function(array){
    console.log(`he modificado el array y ahora es de ${array.length} elementos!`)
})




