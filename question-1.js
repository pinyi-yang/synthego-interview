/* 
    * synthesized, mass not agree with theory

    A. f(seqStr) => number of different parts
    e.g.
    “-Uro-Uro-Gro-Ums-Um” => 2 -Ur, 1 -Gr, 2 -Um, 3 o and 1 s

    * I assume a special modified Ur will be counted the same as unmodified Ur
    e.g.
    "-Uro*Uro" => 2 Ur

    * the count will be stored in a map as:
    {
        Ur: 2
        Gr: 1
    }

*/

//! this function assume seqStr is always a valid sequence string
function countPartsInSequence(seqStr) {
    if (!seqStr.length) return {};

    let index = 0;
    const countMap = {};
    const length = seqStr.length

    while(index + 4 < length) {
        const part = seqStr.substring(index, index + 4); // this can be modified is there is a performance issue
        const geneInfo = part.substring(1, 3);
        const link = part.charAt(3);

        if (countMap[geneInfo]) {
            countMap[geneInfo] += 1;
        } else {
            countMap[geneInfo] = 1
        }

        if (countMap[link]) {
            countMap[link] += 1;
        } else {
            countMap[link] = 1;
        }

        index += 4;
    }

    const lastGene = seqStr.substring(length - 2, length); // this can be modified is there is a performance issue
    if (countMap[lastGene]) {
        countMap[lastGene] += 1;
    } else {
        countMap[lastGene] = 1;
    }

    return countMap;
}


const mockMassTable = {
    Ur: 12372,
    Um: 5694,
    Gd: 24575,
    Ad: 4587,
    Td: 11234,
    Cr: 14513,
    Gr: 39104,
    o: 1342,
    s: 4579,


}
function weightSequence(countMap) {
    console.log(countMap)
    let mass = 0;

    for (let part in countMap) {
        console.log(part)
        if (!mockMassTable[part]) throw new Error(`Can NOT find the mass for ${part}`);
        mass += mockMassTable[part]
    }

    return mass;
}


module.exports = {
    countPartsInSequence,
    weightSequence
}