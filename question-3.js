const acceptedMap = {
    modifiers: ["-", "m", "b", "i"],
    bases: ["A", "G", "C", "T", "U", "I"],
    sugars: ["d", "r", "m", "f", "a", "i", "p"],
    linkages: ["o", "s"]
}

//* this can be easily modified to return all error locations.
//* for now, I just do as required: "return the position"
function validateSequence(seqStr) {
    const length = seqStr.length;

    let index = 0;

    while (index + 3 <= length) {
        const part = seqStr.substring(index, index + 4); // this can be modified is there is a performance issue
        
        if (!acceptedMap.modifiers.includes(part.charAt(0))) return {isValid: false, errorLoaction: index}
        if (!acceptedMap.bases.includes(part.charAt(1))) return {isValid: false, errorLoaction: index + 1}
        if (!acceptedMap.sugars.includes(part.charAt(2))) return {isValid: false, errorLoaction: index + 2}
        if (part.charAt(3) && !acceptedMap.linkages.includes(part.charAt(3))) return {isValid: false, errorLoaction: index + 3}

        index += 4;
    }

    return {
        isValid: true
    };
}

module.exports = {
    validateSequence
}