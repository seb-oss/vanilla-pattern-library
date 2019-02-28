---
title: Accordion
componentid: component-accordion
variantid: static
guid: component-accordion-0
---
# Usage
Import classes:
```scss
@import "~@sebdesignlibrary/vanilla/src/components/accordions/accordion";
```

We build accordions using the description list element. Each heading is in a **dt** element, and the content is in the following **dd** element.

For styling purposes the heading text needs to be wrapped in a child element. It doesn't matter what element you use, as long as it is allowed inside a **dt** according to the [HTML spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt). In the example below we use a **b** element to wrap the text.

:::componentpreview
## Base state
```html
<dl class="sdv-accordion">
    <dt class="sdv-accordion__header sdv-accordion__header--expanded"><b>Accordion header</b></dt>
    <dd><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></dd>
    <dt class="sdv-accordion__header"><b>Accordion header</b></dt>
    <dd><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></dd>
    <dt class="sdv-accordion__header"><b>Accordion header</b></dt>
    <dd><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></dd>
</dl>
```
:::
