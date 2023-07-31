const { log } = require('console');
const os = require('os')

const user = os.userInfo(os)
console.log(user);

//method returns the system up time in seconds
console.log(`the system uptime is ${os.uptime()} second`);

const currentOS = {
	name : os.type(),
	release : os.release(),
	totalMem : os.totalmem(),
	freeMem : os.freemem(),
}
console.log(currentOS);