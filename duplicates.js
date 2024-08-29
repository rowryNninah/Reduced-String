function reducedString(string){
    let newString = [];

    for (let a = 0; a < string.length; a++){
        let current = string[a];
        let lastElement = newString[newString.length - 1];
        if(lastElement === current){
            newString.pop()
        }else{
            newString.push(current)
        }
    }
    if(newString.length === 0){
        return "String Empty"
    }else{
        return newString.toString();
    }
    
}

module.exports = {reducedString}

