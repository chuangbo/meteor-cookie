# Meteor Cookie

Wrapper of https://github.com/aralejs/cookie

## Installation

```meteor add chuangbo:cookies```

## Usage

### get *Cookie.get(name, [options])*

Get cookie. `options`:

1. `converter` function. Cookie will be pass through converter and return the result, only if value is not undefined.
1. Options can be an object。`converter` and `raw`. Cookie is decoded when writing/reading by default, unless specific `raw` to true.

```js
// setup
document.cookie = 'foo=1';
document.cookie = 'bar=2';

Cookie.get('foo');
// returns '1'

// converter
Cookie.get('bar', function(s) { return parseInt(s); } );
// returns 2

Cookie.get('not_exists');
// returns undefined

```


### set *Cookie.set(name, value, [options])*

Set cookie. `options` can contain `path`(string), `domain`(string), `expires`(int or Date object), `raw`(bool). When `raw` set to true, cookie will not be encoded.

```js
Cookie.set('foo', 3);

Cookie.set('bar', 4, {
    domain: 'example.com',
    path: '/',
    expires: 30
});
```


### remove *Cookie.remove(name, [options])*

Delete cookie.

```js
Cookie.remove('foo');

Cookie.remove('bar', {
    domain: 'example.com',
    path: '/'
});
```


