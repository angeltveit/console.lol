import bootstrap from './index.js'
import { lolify } from './index.js'

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