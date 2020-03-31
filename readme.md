# nunjucks-global-uid

Automatically create unique IDs in Nunjucks.
This adds `uid(ns)` to your templates so you can assign unique IDs wherever needed.

## Install

````
npm i nunjucks-global-uid
````

## Usage

Register with nunjucks.

``` js
const nunjucks = require('nunjucks')

const env = nunjucks.configure('views')

const uid = require('nunjucks-global-uid')(env)
// uid = Object { reset() }
```

Call `reset()` anytime you want to reset counts.

``` js
// E.g. reset counts before each render(), or renderFile()
const render = (...a) => {
  uid.reset() // reset counts, to remain unique per file
  nunjucks.renderFile(...a)
}
```

Use `uid()` in your templates.

``` njk
{% for 1 in 5 %}
  {% set id = uid('ns') %}
  <button aria-controls="{{ id }}">toggle</button>
  <div id="{{ id }}">content</div>
{% endfor %}
```

## Options

You can pass a second argument to this extension to override defaults.

``` js
// Default option
{
  name: 'uid'
}
```
