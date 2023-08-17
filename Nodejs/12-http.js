const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Welcome to our home page')
	}
	else if (req.url === '/about') {
		res.end('here is our short history')
	}
	else {
		res.end(`
		<h1> OOp!!</h1>
		<p> We can't seem find the page !!</p>
		<a href="/">Back home</a>
		`)
	}
	
})

server.listen(5000)