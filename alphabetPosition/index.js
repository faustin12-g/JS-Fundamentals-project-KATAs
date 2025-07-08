function alphabetPosition(text) {
    var position = "";
    for(var i=0; i<text.length; i++)
    {
        var char = text[i].toLowerCase();
        if(char >= 'a' && char <= 'z')
        {
            position += (char.charCodeAt(0) - 96) + " ";
        }
    }
    return position.trim();
}

alphabetPosition("The sunset sets at twelve o' clock."); // Output: 20 8 5 19 21 14 19 5 20 19 5 20 19 1 18 20 20 23 5 12 22 5 15 3 12 15 3 11