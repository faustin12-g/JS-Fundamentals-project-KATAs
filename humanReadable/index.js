function humanReadable(seconds) {
    let munutes = Math.floor(seconds/60)
    let hours = Math.floor(seconds/3600)
    let sec = seconds%60

    if(seconds > 359999)
    {
        return '99:59:59'
    }
    return `${hours.toString().padStart(2,'0')}:${munutes>=60?"00:00":munutes.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
}

console.log(humanReadable(67)) // 01:00:00