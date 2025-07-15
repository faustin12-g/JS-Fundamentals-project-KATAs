function arrayStats(arr) {
    let stat = {}

    stat.sum = arr.reduce((acc, curr) => acc+curr, 0)
    stat.avg = stat.sum / arr.length
    stat.min = Math.min(...arr)
    stat.max = Math.max(...arr)

}