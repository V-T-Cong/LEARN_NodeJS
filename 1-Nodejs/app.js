const  {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async() => {
	try {
		const First = await getText('D:/Nodjs_tutorial/Nodejs/content/First.txt', 'utf8') 
		const Second = await getText('D:/Nodjs_tutorial/Nodejs/content/Second.txt', 'utf8')
		await
		console.log(First, Second);
	} catch (error) {
		console.log(error);
	}
}

start()


const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, 'utf8', (err, data) => {
			if (err) {
				reject(err)
			}
			else {
				resolve(data)
			}
		})
	})
}

// getText('D:/Nodjs_tutorial/Nodejs/content/First.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))