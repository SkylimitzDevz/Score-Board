let score1 = document.getElementById("team1-score")
let score2 = document.getElementById("team2-score")

let scoreA = 0
let scoreB = 0



function add(team, points) {
    console.log("Team:", team, "points", points)

    let pointCount = Number(points)

    console.log("ponits: " +pointCount)

     if (team === "A") {
        scoreA += pointCount
        score1.innerText = scoreA
     }

     if (team === "B") {
        scoreB += pointCount
        score2.innerText = scoreB
     }
}

function reset() {
    score1.innerText = 0
    score2.innerText = 0
    scoreA = 0
    scoreB = 0
}
