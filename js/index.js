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
        decimal.value = parseInt(binary, 2);
    }

}

function printError() {
    let errorBox = document.querySelector("[class=number-binary]")
    errorBox.innerHTML += `<p class="errorBox" name="errorBox">Este número não é binário</p>`
}

function cleanError() {
    let errorBox = document.querySelector("[name=errorBox]")
    if (errorBox !== null) {
       errorBox.outerHTML = ''
    }
}

document.querySelector("[name=binary]")
document.addEventListener("change", calculate)