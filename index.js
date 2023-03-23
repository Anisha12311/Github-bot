
const jsonfile = require('jsonfile')
const filepath = './data.json';
const simpleGit = require('simple-git')
const moment = require('moment')

const makeCommit = n => {
    if(n===0) return simpleGit().push();
 const x =  Math.floor(Math.random() * (54 - 0 + 1)) + 0;
 const y =Math.floor(Math.random() * (6 - 0 + 1)) + 0;
 console.log("x",x)
 console.log("y",y)
const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();
const data = {
    date : DATE
}

console.log(DATE)

jsonfile.writeFile(filepath,data,() => {
    simpleGit().add([filepath]).commit(DATE,{'--date': DATE},makeCommit.bind(this,--n)).push()
})
}
makeCommit(50)