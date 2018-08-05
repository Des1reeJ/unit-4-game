$(document).ready(function () {

    var blue = 0;
    var red = 0;
    var green = 0;
    var yellow = 0;
    var gains = 0;
    var losses = 0;
    var totalScore = 0;
    var matchNumber = 0;
    var displayMsg = "";

// when player starts new game, the gems will display any number between 12 and 100.
    function newGame() {
        totalScore = 0;
        red = Math.floor(Math.random() * 13) + 1;
        blue = Math.floor(Math.random() * 13) + 1;
        green = Math.floor(Math.random() * 13) + 1;
        yellow = Math.floor(Math.random() * 13) + 1;
        matchNumber = Math.floor(Math.random() * 50) + 4;

    }
        newGame();


    function createPage() {
        $("#displayMsg").text(displayMsg);
        $("#matchNumber").text(matchNumber);
        $("#totalScore").text(totalScore);
        $("#gains").text(`Gains: ${gains}`);
        $("#losses").text(`Losses: ${losses}`);

    }
        createPage();


    function isGainOrLoss() {
        if (matchNumber === totalScore) {
            gains++;
            $("#gains").text(`Gains: ${gains}`);
            alert("Nice! Keep going!");
            newGame();
            return true;
        } else if (matchNumber < totalScore) {
           losses++;
           $("#losses").text(`Losses: ${losses}`);
            alert("Oh, what a bummer!");
            newGame();
            return true;
        } else {
            return false;
        }
    }


    $("#green").on('click', function (){
        totalScore += Number.parseInt(green)
        console.log(green + "score of green");
        console.log(totalScore + "is the current total score");
        createPage();
        isGainOrLoss();

    })

    $("#red").on('click', function (){
        totalScore += Number.parseInt(red)
        console.log(red + "score of red");
        console.log(totalScore + "is the current total score");
        createPage();
        isGainOrLoss();

    })
    $("#blue").on('click', function () {
        totalScore += Number.parseInt(blue)
        console.log(blue + "score of blue");
        console.log(totalScore + "is the current total score");
        createPage();
        isGainOrLoss();
})
    $("#yellow").on('click', function () {
        totalScore += Number.parseInt(yellow)
        console.log(yellow + "score of yellow");
        console.log(totalScore + "is the current total score");
        createPage();
        isGainOrLoss();
    })


});


