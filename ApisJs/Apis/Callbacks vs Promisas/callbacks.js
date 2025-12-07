
const operation = (numero1, numero2, op) =>{

return setTimeout(() => {
    op(numero1,numero2)
},500)

}


operation(1,3, (a, b) => {
    console.log(a + b)
})



