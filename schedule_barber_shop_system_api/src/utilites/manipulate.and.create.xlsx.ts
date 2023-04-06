import * as fs from 'fs'
import * as path from 'path'
const mainColumn = [
    'Name',
    'Age',
    'City'
]
path.resolve()
fs.writeFile('./teste.txt','Testando2',()=>{
    console.log('Arquivo criado.')
})
fs.appendFile('./teste.csv', 'Name',()=>{
    console.log('Arquivo criado.')
})