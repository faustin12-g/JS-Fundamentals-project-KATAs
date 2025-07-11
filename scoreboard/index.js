function scoreboard(string)
{
    let wordToNumber = {
        "zero":0,
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9,
        "nil":0,
    }

    let score = []
    let words = string.toLowerCase().split(" ")

    for(var word of words)
    {
        if(wordToNumber.hasOwnProperty(word))
        {
            score.push(wordToNumber[word])
        }
    }
    return score
}

console.log(scoreboard("The score is four nil")) // [1, 2, 3, 4, 5, 6, 7, 8, 9]