const { numMatchingSubseq } = require('./numMatchingSubseq')
// const { generateFile } = require('./generateFile')
const { readFile } = require('./readFile')
debugger
let hiStr = readFile('hi.txt')
let arr = ['hh', 'h1', 'h', 'hi', 'ih', 'hi']
let count = numMatchingSubseq(hiStr, arr)

console.log(count)