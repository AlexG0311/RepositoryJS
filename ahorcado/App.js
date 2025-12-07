    let intentos = 0;
    let intentosMaximos = 7;
    const palabraSecreta = "Programa";
    let palabraCorrecta = false;
    const letrasAdivinadas = [];   // Guardamos letras adivinadas....... 
           
    letrasAdivinadas.length = palabraSecreta.length ;
   


    for (let i = 0; i < palabraSecreta.length; i++) {
        letrasAdivinadas[i] = '_';
        document.getElementById("letra").innerHTML =  letrasAdivinadas.join('');         
       } 


      function obtenerLetra(){
    // Mientras que la palabra aun no este adivinada y aun queden intentos puedes seguir.
     if(palabraCorrecta && intentos >= intentosMaximos) return
        // Letra digitada
        let letra =  document.getElementById("input").value;   
        letra = letra.charAt(0); //Obtiene la primera letra
        let correcto = false; 

        for(let i = 0; i < palabraSecreta.length ; i++ ){        
        if(palabraSecreta.charAt(i) === letra){
            
         letrasAdivinadas[i] = palabraSecreta[i];
        correcto = true;        
        }                    
        }              

        if(!correcto){
        intentos++   
        document.getElementById("texto").innerHTML = "!Palabra Incorrecta! te quedan " + `${ intentosMaximos - intentos }` + " intentos.";         
        }
        else {
        document.getElementById("letra").innerHTML = letrasAdivinadas.join('');
        }
        if(letrasAdivinadas.join("") === palabraSecreta){
            palabraCorrecta = true;
            document.getElementById("texto").innerHTML = "Usted ha ganado!!! 🥰🥰🥰";
        }
         // Verificar si perdió
       if (intentos >= intentosMaximos && !palabraCorrecta) {
        document.getElementById("texto").innerHTML = `¡Perdiste! 😢 La palabra era: ${palabraSecreta}`;
        document.getElementById("letra").innerHTML = palabraSecreta;
    }
    }
    
    
   
















