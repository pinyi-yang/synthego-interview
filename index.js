const {validateSequence} = require("./question-3");

const testCases = [
    "-Gdo-Gdo-Ado-Ado-Tdo-Gro-Gro-Cro-Uro-Uro-Uro-Ur",
    "-Uro-Uro-Gro-Ums-Um",
    "",
    "-Ux",
    "-Gro-Um",
    "-Tdo-Gr",
    "-Gdo-Gdo-Ado-Ado-Txo-Gro-Gro-Cro-Uro-Uro-Uro-Ur",
    "-Gdo-Gdo-Ado-Ado-Tdx-Gro-Gro-Cro-Uro-Uro-Uro-Ur",
    "-Gdo-Gdo-Ado-Ado-xdo-Gro-Gro-Cro-Uro-Uro-Uro-Ur",
    "-Gdo-Gdo-Ado-AdoxTdo-Gro-Gro-Cro-Uro-Uro-Uro-Ur",
    "-Gdo-Gdo-Ado-Ado-Tdo-Gro-Gro-Cro-Uro-Uro-Uro-xr",
    "-Gdo-Gdo-Ado-Ado-Tdo-Gro-Gro-Cro-Uro-Uro-Uro-Ux",
    "-Gdo-Gdo-Ado-Ado-Tdo-Gro-Gro-Cro-Uro-Uro-UroxUr",
]

testCases.forEach(test => {
    try {
        console.log(validateSequence(test))
    } catch(err) {
        throw new Error(err.stack)
    }
})