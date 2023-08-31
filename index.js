
class Logger {
  name = null

  constructor(name = 'Logger') {
    this.name = name
  }

  log(key, ...values) {
    console.log(this.name, key, ...values)
    return this
  }
}

module.exports = { Logger, }
