let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScoreContainer = document.getElementById("home-score-container")
let guestScoreContainer = document.getElementById("guest-score-container")

homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

function addScore(points, team) {
    if (team === "home") {
        homeScore += points
        homeScoreEl.textContent = homeScore
    }
    else {
        guestScore += points
        guestScoreEl.textContent = guestScore
    }

    if (homeScore === guestScore) {
        homeScoreContainer.style.border = "2px solid orange"
        guestScoreContainer.style.border = "2px solid orange"
    }

    else if (homeScore > guestScore) {
        homeScoreContainer.style.border = "2px solid red"
        guestScoreContainer.style.border = "none"
    }
    else if (guestScore > homeScore) {
        guestScoreContainer.style.border = "2px solid red"
        homeScoreContainer.style.border = "none"
    }
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeScoreContainer.style.border = "none"
    guestScoreContainer.style.border = "none"
}