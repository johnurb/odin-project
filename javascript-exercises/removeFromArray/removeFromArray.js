const removeFromArray = function(...args) {
    let uniqueArray = [];
    let default_array = args[0];
    for (let i=0; i<default_array.length; i++){
        if(!args.includes(default_array[i])){
            uniqueArray.push(default_array[i]);
        }
    }

    return uniqueArray;
}

module.exports = removeFromArray
