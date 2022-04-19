const userInput = document.getElementById("userInput")
const contentValueTopParagraph = document.getElementById("content-value-top-paragraph")
const contentValueBottomParagraph = document.getElementById("content-value-bottom-paragraph")
const metricUserNumber = document.querySelectorAll("#metricUserNumber")
const imperialUserNumber = document.querySelectorAll("#imperialUserNumber")
const metersValue = document.getElementById("metersValue")
const litersValue = document.getElementById("litersValue")
const kilosValue = document.getElementById("kilosValue")
const feetValue = document.getElementById("feetValue")
const gallonsValue = document.getElementById("gallonsValue")
const poundsValue = document.getElementById("poundsValue")


function convertMetersToFeet(val) {
    return Math.round(((val * 3.281) + Number.EPSILON) * 100) / 100
}

function convertLitersToGallons(val) {
    return Math.round(((val / 3.785) + Number.EPSILON) * 100) / 100
}

function convertKilosToPounds(val) {
    return Math.round(((val * 2.205) + Number.EPSILON) * 100) / 100
}

function convertFeetToMeters(val) {
    return Math.round(((val / 3.281) + Number.EPSILON) * 100) / 100
}

function convertGallonsToLiters(val) {
    return Math.round(((val / 264) + Number.EPSILON) * 100) / 100
}

function convertPoundsToKilos(val) {
    return Math.round(((val / 2.205) + Number.EPSILON) * 100) / 100
}

function returnError(){
    for(i= 0; i < metricUserNumber.length; i++) {
        metricUserNumber[i].textContent = ""
    }

    for(j= 0; j < imperialUserNumber.length; j++) {
        imperialUserNumber[j].textContent = ""
    }

    feetValue.textContent = ""
    metersValue.textContent = ""
    gallonsValue.textContent = ""
    litersValue.textContent = ""
    poundsValue.textContent = ""
    kilosValue.textContent = ""
}

userInput.addEventListener("input", event =>{

    let userInputValue = userInput.value
    const validNumber = /^(\d{1,3})$|^(\d{1,3}\.\d{1,3})$/
    const commaSeparator = /^\d{1,3}(\,)$/
    const onlyDot = /^(\d{1,3}\.)$/
    const initialNumberNonValid = /^([a-z]*)$|^(\d+[a-z])$/ig

    if (userInputValue === "") {
        contentValueTopParagraph.textContent = "Insert a number."
        contentValueBottomParagraph.textContent = "Use a dot as a decimal separator."
    } else if (validNumber.test(userInputValue)) {
        contentValueTopParagraph.textContent = ""
        contentValueBottomParagraph.textContent = ""

        for(i= 0; i < metricUserNumber.length; i++) {
            metricUserNumber[i].textContent = userInputValue
        }
    
        for(j= 0; j < imperialUserNumber.length; j++) {
            imperialUserNumber[j].textContent = userInputValue
        }
        
        feetValue.textContent = convertMetersToFeet(userInputValue)
        metersValue.textContent = convertFeetToMeters(userInputValue)
        gallonsValue.textContent = convertLitersToGallons(userInputValue)
        litersValue.textContent = convertGallonsToLiters(userInputValue)
        poundsValue.textContent = convertKilosToPounds(userInputValue)
        kilosValue.textContent = convertPoundsToKilos(userInputValue)

    }  else if (commaSeparator.test(userInputValue)) {
        contentValueBottomParagraph.textContent = "Use a dot as a decimal separator."

        returnError()

    } else if (initialNumberNonValid.test(userInputValue)) {
        contentValueTopParagraph.textContent = "Insert a number."
        contentValueBottomParagraph.textContent = ""

        returnError()

    } else if (onlyDot.test(userInputValue)) {

        returnError()
    } else {
        contentValueBottomParagraph.textContent = "Number only with three digits."

        returnError()
    }
})