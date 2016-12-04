# adventar [![Build Status](https://travis-ci.org/akameco/adventar.svg?branch=master)](https://travis-ci.org/akameco/adventar)

> Retrieve articles from adventar


## Install

```
$ npm install --save adventar
```


## Usage

```js
const adventar = require('adventar');

adventar('1536').then(res => {
	const {date, user, title, url} = res[2];
	console.log(`今日(${date})は${user}さんの「${title}」です\n${url}`);
});
// => 今日(12/03)はatsuo1203さんの「岩井研残留日誌 - あつおの日常~あつおと過ごした365日~」です
// => http://atsuocps.hatenablog.com/entry/zanryuDiary
```


## API

### adventar(input)
Returns an array of information on the advent calendar.
The content is date user title url.

#### input

Type: `string`

url or id

## License

MIT © [akameco](http://akameco.github.io)
