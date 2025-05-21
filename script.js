const convertButton = document.querySelector(".convert-button")//mapea o botão
const selectPrimaryCurrency = document.querySelector("#primary-currency")// mapea a escolha da moeda primaria
const selectSecundaryCurrency = document.querySelector("#secundary-currency")// mapea a escolha da moeda secundaria 

const secundaryFlag = document.querySelector("#secundary-flag")

function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-value").value
    let currencyToday = null
    let convertedValue = inputCurrencyValue / currencyToday
    const currencyValueToConvert = document.querySelector(".value-to-convert")//valor em real
    const currencyConvertedValue = document.querySelector(".converted-value")//outras moedas
    const primarySelect = document.querySelector(".primary-select")
    const secundarySelect = document.querySelector(".secundary-select")

    if (primarySelect.value == "real" && secundarySelect.value == "dolar") { //real para dolar
        currencyToday = 5.6919
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }

    if (primarySelect.value == "real" && secundarySelect.value == "euro") { //real para euro
        currencyToday = 6.3408
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    }

    if (primarySelect.value == "real" && secundarySelect.value == "cripto") { //real para bitcoin
        currencyToday = 588235.29
        convertedValue = inputCurrencyValue / currencyToday
        console.log(convertedValue)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(convertedValue)
    }

    if (primarySelect.value == "dolar" && secundarySelect.value == "real") { //dolar para real
        currencyToday = 0.1757
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue)
    }

    if (primarySelect.value == "dolar" && secundarySelect.value == "euro") { //dolar para euro
        currencyToday = 1.114
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    }

    if (primarySelect.value == "dolar" && secundarySelect.value == "cripto") { //dolar para bitcoin
        currencyToday = 103305
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(convertedValue)
    }

    if (primarySelect.value == "euro" && secundarySelect.value == "dolar") { //euro para dolar
        currencyToday = 0.8976
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }

    if (primarySelect.value == "euro" && secundarySelect.value == "real") { //euro para real
        currencyToday = 0.1576
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue)
    }

    if (primarySelect.value == "euro" && secundarySelect.value == "cripto") {//euro para bitcoin
        currencyToday = 92729.15
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue)
    }

    if (primarySelect.value == "cripto" && secundarySelect.value == "real") {//bitcoin para real
        currencyToday = 0.00000017
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue)
    }

    if (primarySelect.value == "cripto" && secundarySelect.value == "dolar") {//bitcoin para dólar
        currencyToday = 0.00000097
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }

    if (primarySelect.value == "cripto" && secundarySelect.value == "real") {//bitcoin para euro
        currencyToday = 0.0000011
        convertedValue = inputCurrencyValue / currencyToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue)

        currencyConvertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    }
}

convertButton.addEventListener("click", convertValues)// chama a função convertValues e execulta a conversão

// troca imagens e informações da moeda secundaria de acordo com o select secundario
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
    convertValues()
})

// troca imagens e informações da moeda secundaria de acordo com o select secundario
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
    convertValues()
})

