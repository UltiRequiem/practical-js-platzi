# Variables y operaciones

- ¿Qué es una variable y para qué sirve?

  Es como una cajita donde puedes guardar datos
  para despues hacer algo con ellos.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

  Declarar es cuando la nombras, mas no le asignas un valor.
  En Javascript seria asi:

  ```javascript
  let variable;
  ```

  Mientras que inicializar es cuando ya le das un valor.

  ```javascript
  const MY_NUMBER = 5;
  ```

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

  Cuando sumas números obtienes un valor de tipo `number`, mientras
  que cuando concatenas `strings` obtienes un valor del mismo tipo (`strings`).

- ¿Cuál operador me permite sumar o concatenar?

  El signo `+`.

## Funciones

- ¿Qué es una función?

  Es un trozo de código que sigue una serie de pasos. Puede recibir
  parametros y esta hecho para poder ser reutilizado.

- ¿Cuándo me sirve usar una función en mi código?

  Combiene utilizar funciones si es que te das cuenta de que ciertas
  lineas de código se repiten en muchas partes.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

  Los parametros son una propiedad intrínseca de un procedimiento,
  dado que está incluido en su definición. En tanto, los argumentos
  son más bien los valores actuales asignados a los parámetros variables
  cuando la función es llamada.

## Condicionales

- ¿Qué es una condicional?

  Es una condición que debe ser cumplida para ejecutar un trozo de
  código.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

  Existe la familia de If(`if`,`else if` y `else`), los switchs y ternarios.
  El if se usa cuando son pocas cosas las que quieres comprobar mientras
  que el switch cuando ya son mas casos. Los Ternarios (mis favoritos) son
  como el `if` pero con una sintaxis mas reducida.

- ¿Puedo combinar funciones y condicionales?

  Claro!

## Ciclos

- ¿Qué es un ciclo?

  Es un trozo de código que se repite.

- ¿Qué tipos de ciclos existen en JavaScript?

  Existen: `for`,`for of`,`for in`, `while`,`do while`, etc.

- ¿Qué es un ciclo infinito y por qué es un problema?

  Es un ciclo que nunca se detiene, y es problematico porque,
  no lo podemos controlar.

- ¿Puedo mezclar ciclos y condicionales?

  Si se puede, y es bastante normal hacerlo.
