// Crear una función que evalué si un usuario es mayor de edad, el resultado deberá mostrarse mediante una ventana (utilizar Alert)
// Modificar el programa anterior para que evalué el ingreso de 3 usuarios e indique cuál de ellos es el mayor

const mas18 = document.getElementById("mas18")
const mayor = document.getElementById("mayor")


function act1(){
    alert ('Programa para saber la mayoria de edad')
    let edad = parseFloat(prompt("Introduzca su edad"))
    if (edad > 18 && edad < 110){
        alert("Usted es mayor de edad")
    }
    else if (edad > 110){
        alert("Usted falleció :(")
    }
    else if (edad < 0){
        alert("Usted todavía no nació")
    }
    else{
        alert("Usted es menor de edad")
    }
}
let users = {
    1: 0,
    2: 0,
    3: 0
};
let text = "texto";
function act2(){
    alert ('Programa para saber quien es mayor. Introduzca 3 usuarios con sus edades para obtener el mayor.')
    users[1] = parseFloat(prompt("Introduzca la edad el primer usuario"));
    users[2] = parseFloat(prompt("Introduzca la edad el segundo usuario"));
    users[3] = parseFloat(prompt("Introduzca la edad el tercer usuario"));
let mayor = Math.max(users[1], users[2], users[3]);

    for( let user in users){
        if (users[user] === mayor){
            text = ("El usuario numero " + user + " es el mayor con " + users[user] + " años");
            console.log(text);
        }};
    alert(text)
    
}

mas18.addEventListener("click", act1)
mayor.addEventListener("click", act2)