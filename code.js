let string = "",
    result = document.getElementById("result");

let alphabet = ["a", "ą", "b", "c", "d", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o", "ó", "p", "r", "s", "ś", "t", "u", "w", "y", "z", "ź", "ż"];

function generateString() {
    const min = parseInt(document.getElementById("min").value),
        max = parseInt(document.getElementById("max").value);
    let getLength = Math.round((Math.random() * (max - min) + min));

    console.log("Ilosc losowanych liter " + getLength);
    for (let i = 0; i < getLength; i++) {
        console.log("string");

        let uppercase = Math.round(Math.random());
        if (uppercase) {
            string += alphabet[getLetter()].toUpperCase();
        } else {
            string += alphabet[getLetter()];
        }
    }
    returnString();

}

function getLetter() {
    let letter = Math.floor(Math.random() * alphabet.length);
    console.log("Number wylosowanej: " + letter);
    console.log("Wylosowana litera: " + alphabet[letter])
    return letter;
}

function returnString() {
    result.innerHTML = "String: <h1>" + string; + "</h1>";
    string = "";


}

document.getElementById("button").addEventListener("click", generateString);