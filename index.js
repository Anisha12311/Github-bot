const jsonfile = require('jsonfile')
const filepath = './data.json';
const moment = require('moment')

const DATE = moment().format();
const data = {
    date : DATE
}
console.log(DATE)

jsonfile.writeFile(filepath,data)