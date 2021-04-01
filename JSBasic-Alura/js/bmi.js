const patients = document.querySelectorAll(".patient")

patients.forEach(patient => {
    
    const tdweight = patient.querySelector(".info-weight")
    const weight = tdweight.textContent
    const tdheight = patient.querySelector(".info-height")
    const height = tdheight.textContent
    const tdBmi = patient.querySelector(".info-bmi")

    if(!validateWeight(weight)){
        validWeight = false
        tdBmi.textContent = "Invalid Weight"
        patient.style.backgroundColor = "red"

    }
    else if(!validateHeight(height)){
        validHeight = false
        tdBmi.textContent = "Invalid Height"
        patient.classList.add("invalid-patient")
    }
    else {
        tdBmi.textContent = calcBmi(weight, height)
    }  
})

function validateWeight(weight){

    return weight >= 0 && weight < 400 

}

function validateHeight(height){

    return height >= 0 && height <= 3.0

}

function calcBmi(weight, height) {
    let imc = 0
    imc = weight / (height * height)

    return imc.toFixed(2)
}
