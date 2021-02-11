import lolify from './lolify.js'

export default function bootstrap() {
  globalThis.console.lol = (...params) => {
    console.log(...lolify(...params))
  }
}