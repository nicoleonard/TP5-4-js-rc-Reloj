const formato = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let fecha = document.querySelector("#fecha");
let hora = document.querySelector("#hora");

setInterval(()=>{let fechaActual = new Date();
    hora.innerHTML = fechaActual.toLocaleTimeString('en-US')
    fecha.innerHTML = fechaActual.toLocaleDateString('es-ES', formato)},1000)

