import lolify from './lolify.js'

export default function bootstrap(opts={}) {
  globalThis.console.lol = (...params) => {
    console.log(...lolify(params, opts))
  }
}