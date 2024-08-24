function CopyEmail(TextToCopy) {
    var Temp = document.createElement("input");
    var messageSuccess = 'copied to clipboard!';
    Temp.value = TextToCopy;
    document.body.appendChild(Temp);
    Temp.select();

    document.execCommand("copy");
    document.body.removeChild(Temp);

    var hoverTextElement = document.querySelector('.hovertext');
    hoverTextElement.textContent = messageSuccess;

    // Reset hover text after a short delay (e.g., 2 seconds)
    setTimeout(function() {
        hoverTextElement.textContent = 'my email address!';
    }, 2000);
}

