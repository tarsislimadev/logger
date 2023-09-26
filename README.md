# @brtmvdl/logger

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/logger/npm-publish.yml?label=NPM%20package&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Flogger%2Factions%2Fworkflows%2Fnpm-publish.yml)](https://github.com/brtmvdl/logger/actions/workflows/npm-publish.yml) [![github/license](https://img.shields.io/github/license/brtmvdl/logger)](https://img.shields.io/github/license/brtmvdl/logger) [![github/stars](https://img.shields.io/github/stars/brtmvdl/logger?style=social)](https://img.shields.io/github/stars/brtmvdl/logger?style=social)

## install

```bash
npm i @brtmvdl/logger
```

## how to use

```js
const { Logger } = require('@brtmvdl/logger')

const logger = new Logger('application')

logger.log('key', 'value1', 'value2', 'value3')
```

## License

[MIT](./LICENSE)
