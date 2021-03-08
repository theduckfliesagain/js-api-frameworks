const server = require('./server')


const port = process.env.PORT || 3000

server.listen(port, () => console.log(`\nPlease go through to the window to collect your order!\n`))