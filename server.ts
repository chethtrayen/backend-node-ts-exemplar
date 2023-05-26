import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const PORT = process.env.PORT

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`)
})
