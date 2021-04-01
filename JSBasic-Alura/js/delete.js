const table = document.querySelector("table")

table.addEventListener("dblclick", (event) => {

    event.target.parentNode.classList.add("fade-out")
    setTimeout( () => {
        event.target.parentNode.remove()
    }, 500)
   
})