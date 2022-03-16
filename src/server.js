const express = require('express')
const logger = require('./utils/logger')

const app = express();

app.route('/').get((req, res) => {
  logger.info('Aha, achei você');
  res.send('Hello mundo')
})

app.listen(3333,()=> logger.info('server rodando'));