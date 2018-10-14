# Scen [![Travis (.org)](https://img.shields.io/travis/chunqiuyiyu/scen.svg?style=flat-square)](https://travis-ci.org/chunqiuyiyu/scen)
> Create sections in the terminal.

```
+-Scen---------------------------------+
|                                      |
|                                      |
|         The quick brown fox          |
|       jumps over the lazy dog.       |
|                                      |
|                                      |
+--------------------------------------+
```

## Installation
```js
npm install scen
```

## Usage

```js
const scen = require('scen')
const text = 'The quick brown fox \njumps over the lazy dog.'

console.log(
  scen(text, { 
    title: 'Scen', padding: '2 6', textAlign: 'center', style: 'classic'
  })
)
```

## API

scen(text, [options])

### text
The text which you want to show in section.

### options
How to show text in section, possible values are as follows:

#### title
Title of section. Default is empty string.

#### width
Width of section. Default is `0`. 

#### height
Height of section. Default is `0`. 

#### style
Style of section border. Default is `single`. 

You can use `single`, `double`, `round`, `single-double`, `double-single` or `classic`. If you want to custum the characters, please modify the [code](lib/border.js).

#### padding
Text padding in section. Default is `'0'`. Use this option like [CSS padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding).

#### textAlign

Specifies the horizontal alignment of text. Default is `left`. You can use `left`, `center`, or `right`.

#### titleAlign

Specifies the horizontal alignment of section title. Default is `left`. You can use `left`, `center`, or `right`.

## License
MIT
