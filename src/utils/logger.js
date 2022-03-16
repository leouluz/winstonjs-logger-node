const { createLogger, format, transports } = require('winston')
const moment = require('moment')

module.exports = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.printf(info => `[${info.timestamp}] ${info.level} : ${info.message}`)
  ),
  transports: [
    new transports.File({
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/../logs/log-api-${moment().format('YYYY-MM-DD')}.log`
    }),
    new transports.Console({
      level: 'debug',
      // format: format.combine(format.simple())
    })
  ]
})