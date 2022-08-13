import https from 'node:https'
import fs from 'node:fs'

const options = {
  key: fs.readFileSync('certs/localhost-key.pem'),
  cert: fs.readFileSync('certs/localhost.pem'),
}

https
  .createServer(options, (req, res) => {
    res.writeHead(200)
    res.end('hello world\n')
  })
  .listen(8000, () => {
    console.log('server running at https://localhost:8000/')
  })
