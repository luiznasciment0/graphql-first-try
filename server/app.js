const express = require('express')
const app = express()
const port = 5000
const { graphqlHTTP } = require('express-graphql')
const schema = require('./Schemas')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log('Hello World')
})