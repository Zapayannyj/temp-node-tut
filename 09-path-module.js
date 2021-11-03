const path = require('path')

console.log(`system used separetor path: ${path.sep}`)


const filePath = path.join('/content', 'subfolder', 'text.txt')

console.log(`file path: ${filePath}`)



const base = path.basename(filePath)
console.log(`base path: ${base}`)

const absoluten = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')

console.log(`absolute path: ${absoluten}`)

