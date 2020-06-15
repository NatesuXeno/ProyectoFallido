

const btnAgregar = document.getElementById("btnAgregar").addEventListener("click", (e) => {
    let numero = parseInt(document.getElementById("numero").value);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3005/usuarios", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let divDetails = document.getElementById("details");
            details.innerHTML += '<div><p><strong>ID: ${this.response} </p></div>';

        }
    }
    xhr.send("usuario=filemon&numero" + numero);
});

const btnLeer = document.getElementById("btnConsultar");
btnLeer.addEventListener("click", (e) => {
    var request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:3005/usuarios', true)
    request.onload = function () {
        let details = document.getElementById("details");
        let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            details.innerHTML += "<div><p>" + this.response + "</p></div>"

        } else {
            console.log("Error")
            details.innerHTML += "Error en la llamada a la API";

        }

    }
    request.send();
});


