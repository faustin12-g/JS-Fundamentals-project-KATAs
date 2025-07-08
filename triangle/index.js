const catSays = function(max)
{
    var say = "";
    for(var i = 0; i < max; i++ )
    {
        say += "meow ";
    }
    return say;
}

function catCall(callFunc)
{
    return "It said," + callFunc(3);
}
catCall(catSays);