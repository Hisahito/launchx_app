// importando clase MissionCommander
const MissionCommander = require('./app/missionCommander');


const hisahito = new MissionCommander("hisahito")
console.log(hisahito.name)

//Instanciando objetos:
const explorer1 = {
    name: "Explorer 1",
    speed: 100,
    fuel: 100,
    distance: 0,
}
const explorer2 = {
    name: "Explorer 2",
    speed: 100,
    fuel: 100,
    distance: 0
}
const explorer3 = {
    name: "Explorer 3",
    speed: 100,
    fuel: 100,
    distance: 0
}

console.log(explorer1.name);