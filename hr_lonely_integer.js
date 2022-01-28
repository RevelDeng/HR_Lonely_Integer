function lonelyinteger(a) {
    // Write your code here
    var map = {}
    for (let i = 0; i < a.length; i++) {
        map[a[i]] = (map[a[i]] || 0) + 1
    }
    return parseInt(Object.entries(map).sort((a, b) => a[1] - b[1])[0][0])
}