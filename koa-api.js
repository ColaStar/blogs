const express = require('express')
const path = require('path')
const spawn = require('child_process').spawn
const createHandler = require('github-webhook-handler')
const app = express()
const handler = createHandler({
  path: '/push',
  secret: 'blogs',
})


app.use(express.static(path.join(__dirname, './public')))

app.listen(9999, () => {
    console.log('9999端口启动,nb plus')
})

app.get('/push', (req, res) => {
    handler(req, res, function(err) {
        res.statusCode = 404
        res.end('no such location')
    })
})

handler.on('error', err => {
  console.error('Error:', err.message)
})

handler.on('push', e => {  // 监听的push 事件
  try {
  const s = spawn('sh', ['./auto_build.sh'], {
    cwd: `../${e.payload.repository.name}`
  })
  s.stdout.on('data', (data) => {
    console.log(`${e.payload.repository.name}: ${data}`);
  })
  s.stderr.on('data', (data) => {
    console.log(`${e.payload.repository.name}: ${data}`);
  });
  console.log(e.payload.repository.name, 'has rebuild');
  } catch (e) {
      console.log(e)
  }
})

