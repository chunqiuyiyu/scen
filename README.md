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
```javascript
scen(text, [options])
```

### text
The text which you want to show in section.

### options
How to show text in section, possible values are as follows:

```javascript
{
  [title], [width], [height], [style], [padding],
  [textAlign], [titleAlign], [marginTop], [marginLeft], [marginBottom]
}
``` 

#### title
Title of section. Default is empty string.

```javascript
console.log(scen("Hello, world!", { title: "Hi there!"}));

/*
┌─Hi there!─────┐
│Hello, world!  │
└───────────────┘
*/
```

#### width
Width of section. Default is `0`. 

```javascript
console.log(scen("Hello, world!", { width: 20}));

/*
┌────────────────────┐
│Hello, world!       │
└────────────────────┘
*/
```

#### height
Height of section. Default is `0`. 

```javascript
console.log(scen("Hello, world!", { height: 3 }));

/*
┌─────────────┐
│Hello, world!│
│             │
│             │
└─────────────┘
*/
```

#### style
Style of section border. Default is `single`. 

You can use `single`, `double`, `round`, `single-double`, `double-single`, `classic`, `stars` or `fenced`. If you want to customize the characters, please modify the [code](lib/border.js).

```javascript
console.log(scen("Hello, world!", { style: "stars", padding: "1" }));

/*
*****************
*               *
* Hello, world! *
*               *
*****************
*/
```

#### padding
Text padding in section. Default is `'0'`. Use this option like [CSS padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding).

```javascript
console.log(scen("Hello, world!", { padding: "3 1 3 1"}));

/*
┌───────────────┐
│               │
│               │
│               │
│ Hello, world! │
│               │
│               │
│               │
└───────────────┘
*/
```

#### textAlign

Specifies the horizontal alignment of text. Default is `left`. You can use `left`, `center`, or `right`.

```javascript
console.log(scen("Hello, world!", textAlign: "right", width: 20));

/*
┌────────────────────┐
│       Hello, world!│
└────────────────────┘
*/
```

#### titleAlign

Specifies the horizontal alignment of section title. Default is `left`. You can use `left`, `center`, or `right`.

```javascript
console.log(scen("Hello, world!", { title: "Hi there!", titleAlign: "right", width: 20 }));

/*
┌────────────Hi there!─┐
│Hello, world!         │
└──────────────────────┘
*/
```

#### marginLeft

Specifies the left offset for the section.

```javascript
console.log(scen("Hello, world!", { marginLeft: 3 }));

/*
   ┌─────────────┐
   │Hello, world!|
   └─────────────┘
*/
```

#### marginTop

Specifies the top offset for the section.

```javascript
console.log(scen("Hello, world!", { marginTop: 2 }));

/*


┌─────────────┐
│Hello, world!|
└─────────────┘
*/
```

#### marginBottom

Specifies the bottom offset for the section.

```javascript
console.log(scen("Hello, world!", { marginBottom: 2 }));

/*
┌─────────────┐
│Hello, world!|
└─────────────┘


*/
```

## License
MIT
