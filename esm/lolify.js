function lolify(params, opts = {}) {
  if(opts.mode === 'intrusive') {
    return [...params].map(e => '😂')
  }
  return [...params, '😂']
}

export default lolify