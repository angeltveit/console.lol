import bootstrap from './esm/index.js'
import { lolify } from './esm/index.js'

bootstrap()

describe('console.lol() - Testing if debug experience is fun.', () => {
  it('Should print "Hello World" followed by a laughing emoji.', (done) => {
    // Monkey patch console.log for testing the output
    globalThis.console.log = (...params) => {
      if(params[params.length-1] !== '😂') {
        throw new Error('Debugging experience was not fun')
      }
    }
    console.lol('Hello', 'World')
    done()
  })
})

describe('lolify function', () => {
  it('Should return an array where last item is a laughing emoji', (done) => {
    const array = lolify('Hello', 'World')
    if(array[array.length-1] !== '😂') {
      throw new Error('Last item is not laughing emoji. Sadface.')
    }
    done()
  })
})

describe('Intrusive mode', () => {
  it('Should replace all parameters with laughing emoji', (done) => {
    bootstrap({ mode: 'intrusive' })
    // Monkey patch console.log for testing the output
    globalThis.console.log = (...params) => {
      if(!params.every(p => p === '😂')) {
        throw new Error('Debugging experience was not intrusively fun')
      }
    }
    console.lol('Hello', 'World', '!')
    done()
  })
})