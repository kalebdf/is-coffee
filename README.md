# Is it coffee?

A simple library to test whether a given input string is a coffee or not

## Usage

```
const { isCoffee } = require('is-coffee')

const beverage = 'espresso'

if (isCoffee(beverage)) {
  // drink it up
} else {
  // dump it out
}
```

```
const { hasCoffee } = require('is-coffee')

const city = 'Austin'
const location = 'airport'
const store = 'Skymall'

hasCoffee(city)     // true
hasCoffee(location) // true
hasCoffee(store)    // true

// Coffee is everywhere ^_^
```
