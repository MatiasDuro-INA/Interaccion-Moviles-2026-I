
const boton = document.getElementById("toggle-tema")

if(localStorage.getItem("tema") === "oscuro"){
    document.body.classList.add("oscuro")
}


boton.addEventListener("click", () => {
    console.log("click")

    // let alumno = {
    //     // key : value
    //     nombre: "yago"
    // }

    document.body.classList.toggle("oscuro")
    

    if(document.body.classList.contains("oscuro")){
        localStorage.setItem("tema", "oscuro")
    } else{
        localStorage.setItem("tema", "claro")
    }
    
})