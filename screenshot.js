'use strict';

const Nightmare = require('nightmare');

const nightmare = new Nightmare();
// showにtrueをセットすると可視化されます。
// const nightmare = new Nightmare({show:true});


main();

async function main() {
    await screenshot('https://www.google.co.jp');
}

async function screenshot(url) {
    await nightmare
        .goto(url)
        .viewport(1024, 768)
        .screenshot('screenshot.png')
        .end();
}
