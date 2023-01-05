function convertToKelvin(tempCelsius){
    let kelvinToCelsius = tempCelsius + 273.15
    return kelvinToCelsius;    
}
console.log(convertToKelvin(15))
console.log(convertToKelvin(20))


function convertToKelvin(tempFarenheit){
    let celsiusToKelvin = (tempFarenheit - 32) * 5/9 + 273.15
    return celsiusToKelvin;
}
console.log(convertToKelvin(15))
console.log(convertToKelvin(45))


function computeTip(totalBill){
    withPercent = totalBill * 0.10
    return withPercent;
}
console.log(computeTip(500))
