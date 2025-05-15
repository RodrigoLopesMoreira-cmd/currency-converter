const convertButton = document.querySelector(".convert-button")//mapea o botão
const selectPrimaryCurrency = document.querySelector("#primary-currency")// mapea a escola da moeda primaria
const selectSecundaryCurrency = document.querySelector("#secundary-currency")// mapea a escolha da moeda secundaria 
const primaryFlag = document.querySelector("#primary-flag")
const secundaryFlag = document.querySelector("#secundary-flag")

function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-value").value
    const dolarToday = 6.5
    const convertedValue = inputCurrencyValue / dolarToday
    const currencyValueToConvert = document.querySelector(".value-to-convert")//valor em real
    const currencyConvertedValue = document.querySelector(".converted-value")//outras moedas

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue)
    
    currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format(convertedValue)

}


convertButton.addEventListener("click", convertValues)// chama a função convertValues e execulta a conversão

selectPrimaryCurrency.addEventListener("change", function(){
    const secundaryCurrency = selectPrimaryCurrency.value

    
    
})

selectSecundaryCurrency.addEventListener("change", function(){
    const secundaryCurrency = selectSecundaryCurrency.value
    
})

console.log( primaryFlag)