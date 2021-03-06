function calculate() {
    cleanError()

    var binary = document.querySelector("[name=binary]").value
    var decimal = document.querySelector("[name=decimal]")

    var validate = []
    var validateStatus = false

    for (let i = 0; i < binary.length; i++) {
        validate.push(binary[i]) 
        if (validate[i] != 1 && validate[i] != 0) {
            printError()
            validateStatus = false
            break
        } else {
            validateStatus = true
        }
    }

    if (validateStatus === true) {
        decimal.value = parseInt(binary, 2)
        let decimalHistory = parseInt(binary, 2)
        getHistory(binary, decimalHistory)
    }
       
}

function printError() {
    let errorBox = document.querySelector("[class=number-binary]")
    errorBox.innerHTML += `<p class="errorBox" name="errorBox">This number is not binary</p>`
}

function cleanError() {
    let errorBox = document.querySelector("[name=errorBox]")
    if (errorBox !== null) {
       errorBox.outerHTML = ''
    }
}

function getHistory(binary, decimal) {
    
    let historyLength = document.querySelectorAll("[class=history]").length

    if (historyLength < 4) { 
        let history = document.querySelector("[class=container-history]")
        history.innerHTML += `<div class="history"><p>${binary} = ${decimal}</p><br></div>`
    } else {
        // Remove o primeiro elemento do histórico.
        let remove = document.querySelector("[class=history]")
        remove.remove()

        let history = document.querySelector("[class=container-history]")
        history.innerHTML += `<div class="history"><p>${binary} = ${decimal}</p><br></div>`
    }
}

function cleanHistory() {
    for (let o = 0; o < 4; o++) {
        let remove = document.querySelector("[class=history]")
            if (remove) {
                remove.parentNode.removeChild(remove);    
            }
    }
}

let i = 0
document.querySelector("[name=binary]")
document.addEventListener("change", calculate)
document.querySelector("[class=clean-history-Button]").addEventListener("click", cleanHistory)