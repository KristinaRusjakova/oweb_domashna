const words=[
    "banana", "cherry", "orange", "grape", "apple",
    "radish", "melon", "lemon", "plum", "peach",
    "kiwi", "mango", "pear", "cabbage", "apricot",
    "berry", "olive", "coconut", "papaya", "raspberry"
];

const izbranzbor = words[Math.floor(Math.random() * words.length)];

function display3bukvi(word) {
    var displayString = '';
    var letters = [];
    while (letters.length < 3) {
        var randomIndex = Math.floor(Math.random() * word.length);
        if (!letters.includes(randomIndex)) {
        letters.push(randomIndex);
        }
    }
    for (var i = 0; i < word.length; i++) {
        if (letters.includes(i)) {
        displayString += word[i] + ' ';
    } 
    else{
        displayString += '_ ';
    }
    }
  return displayString.trim();
}

let displayzbor=display3bukvi(izbranzbor);
console.log(displayzbor);

let attempts = 5;

document.getElementById("display").textContent = displayzbor;

document.getElementById("pogodi").addEventListener("click", function () {
    const guess = document.getElementById("guessinput").value.toLowerCase();

    if (attempts<=0) {
        alert("Nemas veke obidi! Zborot bese: " + izbranzbor);
        return;
    }

    if (guess.length !== izbranzbor.length) {
        alert("Zborot treba da bide dolg " + izbranzbor.length + " bukvi.");
    } else {
        let newdisplay = "";
        for (let i = 0; i < izbranzbor.length; i++) {
            if (izbranzbor[i] === guess[i]) {
                newdisplay += guess[i];
            } else if (izbranzbor.includes(guess[i])) {
                newdisplay += "_";
            } else {
                newdisplay += displayzbor[i];
            }
        }

        if (newdisplay === izbranzbor) {
            document.getElementById("display").textContent = izbranzbor;
            alert("Bravo! Go pogodi zborot!");
        } else {
            alert("Probaj pak!");
            document.getElementById("display").textContent = displayzbor;
            attempts--;
            document.getElementById("obidi").textContent = "Preostanati obidi: " + attempts;
        }

        document.getElementById("guessinput").value = "";
    }
});