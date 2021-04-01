const importBtn = document.querySelector("#import-patient")

importBtn.addEventListener("click", () => {
    return fetch(`http://localhost:3000/patients`)
        .then(response => response.json())
        .then(response => { 
            response.forEach((patient) => {
                addPatient(patient)
            })
        })
})