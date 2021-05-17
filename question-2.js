/**
 * * wrapping DNA part
 * * 3rd letter
 * * DNA: d, m; RNA: r
 */

//! I add this DNAWrap here to give more option on the string converting in future if your customer would like other format
//! but it is not necessary
function sequneceStrConvertor(seqStr, DNAWrap = {start: "[", end: "]"}) {
    const length = seqStr.length;
    if (length === 0) return "";

    let index = 0;
    let isPrevDNA = false;
    let result = "";

    while (index + 3 <= length) {
        const part = seqStr.substring(index, index + 4); // this can be modified is there is a performance issue
        const symbol = part.charAt(1);
        const isDNA = part.charAt(2) !== "r";

        if (isDNA && !isPrevDNA) result += DNAWrap.start;
        if (!isDNA && isPrevDNA) result += DNAWrap.end;
        result += symbol;

        index += 4;
        isPrevDNA = isDNA;
    }

    if (isPrevDNA) result += DNAWrap.end;

    return result;
}

module.exports = sequneceStrConvertor