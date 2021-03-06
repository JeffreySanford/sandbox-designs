(function IFEE() {
    'use strict';
    var textBox, reversedTextBox, userText, textLength, posChar, reversedText, i;

    /**
     * This function received a string and reverses it
     * @param  {text} userText - The current string typed into the input box
     * @return {text} reversedText - text reversed
     */
    function reverse(userText) {
        textLength = userText.length;
        reversedText = "";
        for (i = 0; i < textLength; i += 1) {
            posChar = userText.charAt((textLength - i) -1 ); 
            reversedText += posChar;
        }
        return reversedText;
    }

    textBox = document.getElementById("inputText");
    reversedTextBox = document.getElementById("reversedTextBox");

    textBox.onkeyup = function keypressEvent() {
        userText = textBox.value;
        reverse(userText);
        reversedTextBox.innerHTML = reversedText;
    };
}());