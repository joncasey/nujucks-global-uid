let cache = Object.create(null)

module.exports = (env, options = {}) => {
  let { name = 'uid' } = options

  env.addGlobal(name, (ns = 'uid') => {
    if (!cache[ns]) cache[ns] = 0
    return `${ns}-${++cache[ns]}`
  })

  return {
    reset () {
      // reset counts
      cache = Object.create(null)
    }
  }
}
