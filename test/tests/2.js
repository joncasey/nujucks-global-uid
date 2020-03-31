module.exports = {
  test: 'reset() should reset counts',
  input: `
{%- for i in [1,2,3] %}
{% set id = uid('toggle') %}
  <button aria-controls="{{ id }}">toggle</button>
  <div id="{{ id }}">content</div>
{%- endfor %}
  `,
  expected: `
  <button aria-controls="toggle-1">toggle</button>
  <div id="toggle-1">content</div>

  <button aria-controls="toggle-2">toggle</button>
  <div id="toggle-2">content</div>

  <button aria-controls="toggle-3">toggle</button>
  <div id="toggle-3">content</div>
  `
}
