function Datos_person() {

    let persona = {
        nombre: document.getElementById("Nombre").value,
        estatura_pies: document.getElementById("Estatura").value,
        peso: document.getElementById("peso").value,
    }

    let estatura_metro=persona.estatura_pies/3.281
    let peso_ideal=persona.peso/estatura_metro

    estatura_metro=estatura_metro.toFixed(2)
    peso_ideal=peso_ideal.toFixed(2)

    let datos = []
    datos.push(persona)
    

    let tabla = document.getElementById("Datos");
    tabla.innerHTML += ""
    for (let x of datos) {
        tabla.innerHTML += `
            <tr>
            <td>${x.nombre}</td>
            <td>${x.estatura_pies +' ft'}</td>
            <td>${estatura_metro +' m'}</td>
            <td>${x.peso +' Kg'}</td>
            <td>${peso_ideal +' Kg'}</td>
            </tr>`
     }

    
}

