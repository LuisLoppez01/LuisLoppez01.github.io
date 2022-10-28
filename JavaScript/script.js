function nombreCompleto(a,b) {
    return a +" "+b;
}
console.log(nombreCompleto('Luis','Lopez'))

function permiso(a,b) {
    if (b => 18) {
        return a + " Eres mayor de edad"
    }else{
        return a + " Eres menor de edad"
    }
}
console.log(permiso("Luis",21))

function promedio(a) {
    let contador = 0
    for (let i = 0; i < a.length; i++){

        contador = contador + a[i]

    }
    let promedioTotal = 0
    promedioTotal = contador / a.length
    if (promedioTotal >=70){
        return 'El grupo está aprobado con calificacion de ' + promedioTotal
    }else{
        return 'El grupo está reprobado con calificacion de ' + promedioTotal
    }
}
let calificaciones = [70,80,90,100,85]
console.log(promedio(calificaciones))
