// Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " +ladoCuadrado+" cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro del cuadrado es: " +perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es: " +areaCuadrado+"cm^2");
console.groupEnd();

// Codigo del triángulo
console.group("Triangulo");
const ladoTringulo1 = 6;
const ladoTringulo2 = 6;
const baseTringulo = 4;

console.log("Los lados del triangulo miden: " +ladoTringulo1+ "cm, " + ladoTringulo2 + "cm, " + baseTringulo + "cm"); 

const alturaTriangulo = 5.5;
console.log("La altura del tringulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTringulo1 + ladoTringulo2 +  baseTringulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTringulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Condigo del Circulo
console.group("Circulo");
// Radio
const radioCirculo = "4";
console.log("El radio del circulo es: " + radioCirculo + " cm");
// Diamentro
const diamentroCirculo = radioCirculo*2;
console.log("El diametro del circulo es: " + diamentroCirculo + " cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = diamentroCirculo*PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

// Area
const areaCirculo = (radioCirculo*radioCirculo)*PI;
console.log("El area del circulo es: " + areaCirculo + " cm^2");

console.groupEnd;