/* eslint-disable func-names */
/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const compression = require('compression')
const path = require('path')

const PORT = 8080

const app = express()
app.use(compression())
app.use(express.static(__dirname + '/public'))

app.get('*', function(request, response) {
  response.setHeader('Content-Type', 'text/html')
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, function() {
  console.log('Server is now listening on port ' + PORT)
})
