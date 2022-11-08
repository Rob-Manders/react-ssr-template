import express from 'express'
import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import App from '../../client/src/App'

const server = express()
const port = 3000

server.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)
  const html = `
		<html lang="en">
			<head>
				<script src="app.js" async defer></script>
			</head>
			<body>
				<div id="root">${app}</div>
			</body>
		</html>
	`

  res.send(html).status(200)
})

server.use(express.static('./build'))

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
