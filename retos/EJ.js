A continuacion, se presenta el codigo que utiliza el metodo  de insercion para realizar la ordenacion 
de un vector de tamaño n: 5
i = 1;
while(i < n){
    key = v[i];
    int j = i - 1;
    while (j >= 0 && v[j] > key){
        v[j + 1] = v[j];
        j = j - 1;

    }
    v[j + 1] = key ;

i++;    
}

1 ) Realizar el conteo de todas las operaciones elementales que tiene este código. (Recuerde que
    las Operaciones Elementales son: operaciones aritméticas básicas, asignaciones a variables,
    los saltos (llamadas a funciones y procedimientos, retorno, interrupciones), las comparaciones
    lógicas y el acceso a estructuras indexadas básicas, como son los vectores y matrices.