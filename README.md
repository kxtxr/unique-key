# Unique key generator
### Installation

```shell
npm install --save unique-key
```

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