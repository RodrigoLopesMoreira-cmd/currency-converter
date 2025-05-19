const convertButton = document.querySelector(".convert-button")//mapea o botão
const selectPrimaryCurrency = document.querySelector("#primary-currency")// mapea a escolha da moeda primaria
const selectSecundaryCurrency = document.querySelector("#secundary-currency")// mapea a escolha da moeda secundaria 

const secundaryFlag = document.querySelector("#secundary-flag")

function convertValues() {
   const inputCurrencyValue = document.querySelector("#input-value").value
const currencyToday = 6.5
const convertedValue = inputCurrencyValue / currencyToday
const currencyValueToConvert = document.querySelector(".value-to-convert")//valor em real
const currencyConvertedValue = document.querySelector(".converted-value")//outras moedas

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)

currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
}).format(convertedValue)



}


convertButton.addEventListener("click", convertValues)// chama a função convertValues e execulta a conversão

selectPrimaryCurrency.addEventListener("change", function () {
    const primaryCurrencyName = document.querySelector("#primary-currency-name")
    const primaryFlag = document.querySelector("#primary-flag")

    if (selectPrimaryCurrency.value == "real") {
        primaryCurrencyName.innerHTML = "Real"
        primaryFlag.src = "./assets/real.png"
    }

    if (selectPrimaryCurrency.value == "dolar") {
        primaryCurrencyName.innerHTML = "Dólar americano"
        primaryFlag.src = "./assets/dolar.png"
    }

    if (selectPrimaryCurrency.value == "euro") {
        primaryCurrencyName.innerHTML = "Euro"
        primaryFlag.src = "./assets/euro.png"
    }

    if (selectPrimaryCurrency.value == "cripto") {
        primaryCurrencyName.innerHTML = "Bitcoin"
        primaryFlag.src = "./assets/bitcoin.png"
    }
})

selectSecundaryCurrency.addEventListener("change", function () {
    const secundaryCurrencyName = document.querySelector("#secundary-currency-name")

    if (selectSecundaryCurrency.value == "real") {
        secundaryCurrencyName.innerHTML = "Real"
        secundaryFlag.src = "./assets/real.png"
    }

    if (selectSecundaryCurrency.value == "dolar") {
        secundaryCurrencyName.innerHTML = "Dólar americano"
        secundaryFlag.src = "./assets/dolar.png"
    }

    if (selectSecundaryCurrency.value == "euro") {
        secundaryCurrencyName.innerHTML = "Euro"
        secundaryFlag.src = "./assets/euro.png"
    }

    if (selectSecundaryCurrency.value == "cripto") {
        secundaryCurrencyName.innerHTML = "Bitcoin"
        secundaryFlag.src = "./assets/bitcoin.png"
    }

})

