import fs from 'fs'
import path from 'path'

export class Logger {
  path = null
  name = null

  constructor(name = 'Logger') {
    this.name = name
  }

  log(key, ...values) {
    console.log(this.name, key, ...values)
    return this
  }

  file(key, value = '') {
    const filename = path.resolve(this.getPath(), key)
    fs.writeFileSync(filename, value)
    return this
  }

  setPath(path = '.') {
    this.path = path
    return this
  }

  getPath() {
    return path.resolve('.', this.path)
  }
}
