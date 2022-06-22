// Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " +ladoCuadrado+" cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " +perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado*lado;
}

// console.log("El area del cuadrado es: " +areaCuadrado+"cm^2");
console.groupEnd();

// Codigo del triángulo
console.group("Triangulo");
// const ladoTringulo1 = 6;
// const ladoTringulo2 = 6;
// const baseTringulo = 4;

// console.log("Los lados del triangulo miden: " +ladoTringulo1+ "cm, " + ladoTringulo2 + "cm, " + baseTringulo + "cm"); 

// const alturaTriangulo = 5.5;
// console.log("La altura del tringulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTringulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura){
    return (base*altura)/2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Condigo del Circulo
console.group("Circulo");
// Radio
// const radioCirculo = "4";
// console.log("El radio del circulo es: " + radioCirculo + " cm");
// Diamentro
function diametroCirculo(radio) {
    return radio*2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diamentro = diametroCirculo(radio);
    return diamentro*PI;
}

// Area
function areaCirculo(radio) {
    return (radio*radio)*PI;
}
console.groupEnd;
