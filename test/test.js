const assert = require('assert')
const tests = require('fs').readdirSync('tests')
  .filter(f => /\.js$/i.test(f))
  .map(f => require(`./tests/${f}`))

const nunjucks = require('nunjucks')
const env = nunjucks.configure()

const uid = require('..')(env)

tests.forEach(test)

function test ({ test, input, expected }) {
  let c = `\x1b[33m${test}\x1b[0m`
  try {
    uid.reset() // reset counts
    let output = nunjucks.renderString(input.trim())
    assert.equal(output.trim(), expected.trim())
    console.log(`${c} => \x1b[32mPASS\x1b[0m`)
  } catch (e) {
    console.log(`${c} => \x1b[91mFAIL ${e.message}\x1b[0m`)
  }
}
