# console.lol 😂
Adds lol() to the console api for a more fun debug experience.

## Usage

```
$ npm install @tobben/console.lol
```

In the initialisation of your javascript:

```js
import bootstrapLol from '@tobben/console.lol'

// Bootstraps the console.lol
bootstrapLol()

console.lol('Hello world!') // prints "Hello world! 😂"
```

## Options
### Intrusive mode

Replaces all parameters with 😂-emoji, for maximized intrusive fun debugging. 

**Usage:** 
```js
import bootstrapLol from '@tobben/console.lol'

bootstrapLol({ mode: "intrusive" })
```
## Motivation
Lol
