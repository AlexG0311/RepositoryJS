import numpy as np
# Constantes
C1 = 49.5  # Constante de la primera carga
C2 = -43.2  # Constante de la segunda carga
C3 = 32.4  # Constante de la tercera carga

# Función que representa la suma del potencial en el punto amarillo menos 215 V
def F(d):
    return (C1 / (d + 0.25)) + (C2 / (0.35 - d)) + (C3 / (0.75 - d)) - 215

# Derivada correcta de la función F con respecto a d
def F_prime(d):
    term1 = -C1 / ((d + 0.25)**2)
    term2 = C2 / ((0.35 - d)**2)
    term3 = -C3 / ((0.75 - d)**2)  # Tercer término con el signo correcto
    return term1 + term2 + term3

# Método de Newton-Raphson para una sola variable d
def newton_raphson(d0, tol=1e-6, max_iter=100):
    """
     Método de Newton-Raphson para resolver el sistema de ecuaciones no lineales.
    
    Parámetros:
    - d0: Valor inicial para la distancia d
    - tol: Tolerancia para la convergencia
    - max_iter: Número máximo de iteraciones
    
    Retorna:
    - d: Valor aproximado de la distancia que satisface el sistema de ecuaciones no lineales
    """
    d = d0
    for i in range(max_iter):
        f_val = F(d)
        f_prime = F_prime(d)
        
        if abs(f_prime) < 1e-10:  # Evitar división por cero
            print("Derivada cercana a cero, el método falla.")
            return None
        
        # Actualización de d
        d_new = d - f_val / f_prime
        
        # Verificar si la diferencia es menor que la tolerancia
        if abs(d_new - d) < tol:
            print(f"Convergencia alcanzada en la iteración {i+1}: d = {d_new:.6f} m")
            return d_new
        
        d = d_new
        print(f"Iteración {i+1}: d = {d:.6f} m")
    
    print("No se alcanzó la convergencia en el número máximo de iteraciones")
    return d

# Valor inicial para la distancia d
d_inicial = 0.5  # metros (valor inicial estimado)

# Llamar al método de Newton-Raphson
d_solucion = newton_raphson(d_inicial)

if d_solucion is not None:
    print(f"La distancia aproximada al punto amarillo es {d_solucion:.6f} m")
else:
    print("No se pudo encontrar una solución.")


    