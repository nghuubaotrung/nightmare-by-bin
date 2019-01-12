# Nightmare Customized by Bin

Nightmare is a high-level browser automation library from [Segment](https://segment.com).
Here is the version that I have built for my own based on my personal tasks.

The goal is to expose a few simple methods that mimic user actions (like `goto`, `type` and `click`), with an API that feels synchronous for each block of scripting, rather than deeply nested callbacks. It was originally designed for automating tasks across sites that don't have APIs, but is most often used for UI testing and crawling.

Under the covers it uses [Electron](http://electron.atom.io/), which is similar to [PhantomJS](http://phantomjs.org/) but roughly [twice as fast](https://github.com/segmentio/nightmare/issues/484#issuecomment-184519591) and more modern.

## Examples

Let's search about you.
I used my github account here. (You can check the file: example.js)

```js
var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://yahoo.com')
  .type('form[action*="/search"] [name=p]', 'bin1302')
  .click('form[action*="/search"] [type=submit]')
  .wait('#main')
  .evaluate(function() {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })

```

You can run this with:

```shell
npm install --save nightmare
node example.js
```

### To install dependencies

```
npm install
```

### To run the mocha tests

```
npm test
```

### Node versions

Nightmare is intended to be run on NodeJS 4.x or higher.
