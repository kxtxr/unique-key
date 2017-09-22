# Unique key generator

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/unique-key.svg?style=flat-square
[npm-url]: http://npmjs.org/package/unique-key
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/unique-key.svg?style=flat-square
[download-url]: https://npmjs.org/package/unique-key

### Install

[![unique-key](https://nodei.co/npm/unique-key.png)](https://npmjs.org/package/unique-key)

### Usage
```javascript
var uniqueKey = require('unique-key');

uniqueKey();            // lAKy6I1wpDu06VrN
uniqueKey(32);          // JOOyujJuSxTH4IPeYBZ7jGbYh1XivKFH
uniqueKey('key_');      // key_Y9swzmCrJuhphnfS
uniqueKey(64, 'pk-');   // pk-EzUXF6tGVcQ1BB7MildOmW3z79tdf5t50JO8qw1pImz76W4icuPol7XcWborLqfj

uniqueKey({
    size: 36,
    prefix: 'pk_',
});                     // pk_SRemDxNIjgzyuFYrHTEYJBeh9WdZbBlTpqup

uniqueKey({
    size: 24,
    prefix: 'sk_',
    transform: 'lower', // Optional lower || upper
});                     // sk_cvwjyzu2zsqsrfhgm9zsclxb
```

The keys generated are not in any sense unique! You may have to check against a database to ensure uniqueness
