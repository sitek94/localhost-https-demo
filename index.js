import http from 'node:http'

http
  .createServer((req, res) => {
    res.writeHead(200)
    res.end('hello world\n')
  })
  .listen(8000, () => {
    console.log('server running at http://localhost:8000/')
  })
