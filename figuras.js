// -- Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado*lado;
}
console.groupEnd();


// -- Codigo del triángulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return Number.parseInt(lado1) +  Number.parseInt(lado2) + Number.parseInt(base)
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
console.groupEnd();

// -- Condigo del Circulo
console.group("Circulo");

// Radio
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



// Codigo HTML---------------------------------------------------
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const resultadoCuadradoP = document.getElementById("resultCuadrado");
    return resultadoCuadradoP.innerText = "El Perimetro es: "+perimetro+"cm";
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const resultadoCuadradoA = document.getElementById("resultCuadrado");
    return resultadoCuadradoA.innerText = "El Area es: "+area+"cm";
}

// Triangulo
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = inputLado1.value;

    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const valueLado2 = inputLado2.value;

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    
    const resultadoTrianguloP = document.getElementById("resultTriangulo");
    return resultadoTrianguloP.innerText = "El Perimtro es: "+perimetro+"cm";
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueAltura, valueBase);

    const resultadoTrianguloP = document.getElementById("resultTriangulo");
    return resultadoTrianguloP.innerText = "El Area es: "+area+"cm";
}

// Circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;

    const diamentro = diametroCirculo(value); 

    const resultadoCirculoD = document.getElementById("resultCirculo");
    return resultadoCirculoD.innerText = "El Diametro son: "+diamentro+"cm";

}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;

    const circunferencia = parseInt(perimetroCirculo(value)); 
    
    const resultadoCirculoC = document.getElementById("resultCirculo");
    return resultadoCirculoC.innerText = "La Circunferencia es de: "+circunferencia+"cm";
}

function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;

    const area = parseInt(areaCirculo(value)); 

    const resultadoCirculoA = document.getElementById("resultCirculo");
    return resultadoCirculoA.innerText = "El Área es de: "+area+"cm";
}

// Triangulo Isosceles
function alturaTriangulo(ladoA, ladoB, base) {
    if (ladoA != ladoB) {
        alert("Los valores de los dos lados no son iguales - los dos lados tienen que tener la misma longitud! \n Intentelo de nuevo")
    }else{
    return Math.sqrt((ladoA*ladoB) - base*base/4);
    }
}

function calcularAlturaTrianguloI() {
    const lado1 = document.getElementById("ladoA");
    const valueLadoA = lado1.value;

    const lado2 = document.getElementById("ladoB");
    const valueLadoB = lado2.value;

    const base = document.getElementById("base");
    const valueBase = base.value;

    const altura = alturaTriangulo(valueLadoA, valueLadoB, valueBase);
    alert(altura);
}