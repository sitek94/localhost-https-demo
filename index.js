import https from 'node:https'

https
  .createServer((req, res) => {
    res.writeHead(200)
    res.end('hello world\n')
  })
  .listen(8000, () => {
    console.log('server running at https://localhost:8000/')
  })
