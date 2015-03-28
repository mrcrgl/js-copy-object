# copy-object [![Build Status](https://secure.travis-ci.org/mrcrgl/js-copy-object.png)](http://travis-ci.org/mrcrgl/js-copy-object)
---------------

Copy, clone and merge, full or partially, javascript objects. 

## Installation

Easily via [npm](http://npmjs.org).

```bash
npm install copy-object
```

## Usage

```javascript
var result = copyObject(sourceObject[, destinationObject, keyList])
```

`destinationObject` is, if not provided, an empty `Object`
`keyList` is an `Array` of keys to copy, if not provided, all keys will be copied.

## Examples

### Behavior

```javascript
var copyObject = require('copy-object'),
	sourceObj = { a: 1, b: 2, c: 3 };

/**
 * Source object is not bitwise equally it's copy
 */
copyObject(sourceObj) === sourceObj
// false

/**
 * Previously defined objects will equal bitwise after copying it.
 */
var destObj = {};
copyObject(sourceObj, destObj) === destObj
// true

destObj
// { a: 1, b: 2, c: 3}

/**
 * Copies only selected keys.
 */
copyObject(sourceObj, {}, ['a'])
// { a: 1 }

/**
 * Copies only selected keys.
 */
var existingObject = { d: 4, e: 5 }
copyObject(sourceObj, existingObject)
// { a: 1, b: 2, c: 3, d: 4, e: 5 }
```

### Some real life examples:

```javascript
var EventEmitter = require('events').EventEmitter;

/**
 * Example class, inherits EventEmitter
 */
function MyClass() {
	this.a = 1;
	this.b = 2;
	this.c = 3;
	this._private = 4;
	this._someOther = 5;
}

// Inherit EventEmitter's prototype
MyClass.prototype = copyObject(EventEmitter.prototype, MyClass.prototype);

/**
 * Returns object with selected attributes.
 */
MyClass.prototype.toObject = function () {
	return copyObject(this, {}, ['a', 'b', 'c']);
};

```



