// CALLBACK <-------------------------------------------------------------------------


const doAsyncStuffWithCallBack = (numero1, numero2, callback) =>{

    const resultado = numero1 + numero2
    return setTimeout(() => {
        callback(resultado)
    },500)

}

doAsyncStuffWithCallBack(1, 3,(result) =>{
    console.log(result)
})


// PROMESAS <----------------------------------------------------------------------
    
const doAsyncStuffWithPromises = (numero1, numero2) => {
    const resultado = numero1 + numero2
    return new Promise(resolve => { 
        setTimeout(() => {
            resolve(resultado)
        },500)

    }
    )
}
    
doAsyncStuffWithPromises(1, 3)
.then(result => console.log(result))



let promesa = new Promise(resolve => resolve(1));

promesa
  .then(resultado => {
    console.log(resultado); // 1
    return resultado * 2;
  })
  .then(resultado => {
    console.log(resultado); // 2
    return resultado * 2;
  })
  .then(resultado => {
    console.log(resultado); // 4
  });

    
    
    