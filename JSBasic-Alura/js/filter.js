const search = document.querySelector('#search')

search.addEventListener("input", () => {

    let patients = document.querySelectorAll(".patient")

    patients.forEach( (patient) => {
        const name = patient.querySelector(".info-name").textContent
        const pattern = new RegExp(search.value, 'i')

        if(pattern.test(name)) patient.classList.remove('hide')
        else if(search.value.length == 0) patient.classList.remove('hide')
        else patient.classList.add('hide')
    })
})