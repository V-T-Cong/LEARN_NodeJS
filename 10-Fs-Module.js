const {readFileSync, writeFileSync } = require('fs')

console.log('start');
const first = readFileSync('./content/First.txt', 'utf-8')
const second = readFileSync('./content/Second.txt', 'utf-8')

writeFileSync(
	'./content/result-sync.txt',
	`Here is the result : ${first}, ${second}`
)

console.log('done');
console.log('starting new one');