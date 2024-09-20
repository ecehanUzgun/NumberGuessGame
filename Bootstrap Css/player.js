//Get by Id
const gamerBody = document.getElementById("gamerBody");
const btnPlay = document.getElementById("btnPlay");

//Nickname text'i players listesine ekle, inputtan gelen deðeri diziye ekle.
//Array
const playerList = []

//Class
class Player {
    constructor(_id, _playerName, _level) {
        this.id = _id,
        this.playerName = _playerName,
        this.level = _level
    }
}

class WebUI {
    static GetPlayers() {
        //gamerBody.innerHTML = "";
        for (var i = 0; i < playerList.length; i++) {
            WebUI.addPlayer(playerList[i]);
        }
    }

    static AddPlayer(player) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
                            <td>${player.id}</td>
                            <td>${player.playerName}</td>
                            <td>${player.level}</td>`;
        gamerBody.append(tr);
    }

    //Game Methods: GuessNumber IsGameOver
    static GuessNumber(player, guess)
}

//Ne zaman? index'te play butonuna týklandýðýnda
// input deðeri playerList'e eklensin AddPlayer

btnPlay.onclick = function (e) {
    const playerName = document.getElementById("playerName").value; //inputtaki deðeri alacak id

    if (playerName) {
        const player = new Player(playerList.length+1, playerName, 1); //id,playerName,level
        playerList.push(player);
        WebUI.AddPlayer(player);
    }
    else {
        alert("Please enter Nickname!");
        return false;
    }
}

//game.html
let guess = 1;
const guessChance = document.getElementById("guessChance");

const GuessRandomNumber = {

    let randomNumber = Math.floor(Math.random() * ((player.level * 10) + 1)) + 1;
    return randomNumber;
}

btnSubmit.onclick = function (e) {
    const guessNumber = document.getElementById("numberGuess").value;
    while (guess != 5) {
    if (guessNumber > randomNumber) {
        guess++;
        alert("Try a smaller number");
    }
    else if (guessNumber < randomNumber) {
        guess++;
        alert("Try a greater number");
    }
    else {
        alert("Congratulations!");
    }
    }
    if (guess === 5) {
        alert("Game Over");
        return false;
    }
}