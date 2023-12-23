let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest")

function addOnePoint(team){
    if(team === "home1"){
        homeScore++;
        homeScoreEl.textContent = homeScore;
    } else{
        guestScore++;
        guestScoreEl.textContent = guestScore;
    }
    leadChecker()
}

function addTwoPoints(team){
    if(team === "home2"){
        homeScore+= 2;
        homeScoreEl.textContent = homeScore;
    } else{
        guestScore+= 2;
        guestScoreEl.textContent = guestScore;
    }
    leadChecker()
}

function addThreePoints(team){
    if(team === "home3"){
        homeScore += 3;
        homeScoreEl.textContent = homeScore;
    } else{
        guestScore += 3;
        guestScoreEl.textContent = guestScore;
    }
    leadChecker()
}

function leadChecker(){
    if(homeScore > guestScore) {
        homeEl.setAttribute("class", "lead")
        guestEl.setAttribute("class", "trailing")
    } else if (guestScore > homeScore) {
        guestEl.setAttribute("class", "lead")
        homeEl.setAttribute("class", "trailing");
    }
}

function newGame(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    homeEl.setAttribute("class", "trailing");
    guestEl.setAttribute("class", "trailing")
}