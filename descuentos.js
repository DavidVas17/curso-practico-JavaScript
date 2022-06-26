
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value;
    const inputCupon = document.getElementById("InputCupon")
    const cuponValue = inputCupon.value;

    if (cuponValue == false) {
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con el descuento de "+discountValue+"% es: $" + precioConDescuento;
    }else if(cuponValue!="JUNIO2022"){
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El cupon "+cuponValue+" no es valido! Intentelo de nuevo";
    }else{
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
        const resultado = precioConDescuento - 15;
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con el descuento de "+discountValue+"% y el cupon "+cuponValue+" es de: $" + resultado;
    }
}


