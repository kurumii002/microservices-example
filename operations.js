//? +"1" = 1 -> convertir a entero (operador +)

/**
 * La funcion retorna la suma de dos numeros
 * @param {number} a
 * @param {number} b
 * @returns number
 */
export const sumar = (a, b) => +a + +b;

export const restar = (a, b) => +a - +b;

export const multplicar = (a, b) => +a * +b;

export const dividir = (a, b) => {
	if (b === 0) return 0;
	return +a / +b;
};