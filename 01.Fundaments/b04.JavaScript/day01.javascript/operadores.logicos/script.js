const currentHour = 24;
let message = "";

if (currentHour >= 22) {
    message = "não deveríamos comer nada, é hora de dormir"
    console.log(message);
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar! :D"
    console.log(message);
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
    console.log(message);
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço"
    console.log(message);
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheirinho de café recém passado"
    console.log(message);
}

let weekDay = "sábado";
if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido");
} else {
    console.log("Oba, mais um dia de aprendizado na Trybe");
}
