const express = require('express')
const cors = require('cors')

const { graphqlHTTP } = require('express-graphql')
const app = express()


const port = 5000
const schema = require('./Schemas')

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use('/graphql', cors(corsOptions), graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log('Hello World')
})