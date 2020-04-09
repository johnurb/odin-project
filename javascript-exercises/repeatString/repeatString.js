const repeatString = function(text, n) {
    if (n<0) return "ERROR"
    let out_string = ''
    for (let i=0; i<n; i++){
        out_string += text
    }

    return out_string
}

module.exports = repeatString
