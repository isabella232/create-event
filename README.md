# create-event

[![CircleCI](https://circleci.com/gh/segmentio/create-event.svg?style=shield&circle-token=edaa99e9596e9977c0765729ec2b06aca628714b)](https://circleci.com/gh/segmentio/create-event)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/create-event/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/create-event)

Create an `event` object cross browser. Useful for unit testing mostly.

## Installation

```sh
$ npm install @segment/create-event
```

## Example
  
```js
var create = require('create-event');
var event = create('keydown', {
  ctrl: true,
  key: 'enter'
});
```

## API

### createEvent(type, [options])
  
  Types:

```js
'click'
'dblclick'
'keydown'
'keyup'
```

  Default `options`:

```js
alt        : false,
bubbles    : true,
button     : 0,
cancelable : true,
clientX    : 0,
clientY    : 0,
ctrl       : false,
detail     : 1,
key        : 0, // can be a string like 'enter' for convenience
meta       : false,
screenX    : 0,
screenY    : 0,
shift      : false,
view       : window
```
