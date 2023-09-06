const anyPremierLeague22 = ["Classificação Premier League 22/23 Final"]
const posPremierLeague22 = ["City", "Arsenal", "Manchester Utd", "Newcastle"]

function imprimirAny(any) {
    console.log(any)
}

function imprimirPos(team, pos) {
    console.log(`${pos + 1}. ${team}`)
}

anyPremierLeague22.forEach(imprimirAny)
posPremierLeague22.forEach(imprimirPos)
// posPremierLeague22.forEach(positions => console.log(positions))