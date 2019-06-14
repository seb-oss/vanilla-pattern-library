---
title: Interactive Accordion
componentid: component-accordion
variantid: css-interactive
guid: component-accordion-css-interactive
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/accordions/accordion';
```

We build accordions using the description list element. Each heading is in a **dt** element, and the content is in the following **dd** element.

For styling purposes the heading text needs to be wrapped in a child element. It doesn't matter what element you use, as long as it is allowed inside a **dt** according to the [HTML spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt). In the example below we use a **b** element to wrap the text.

This is an example of the accordion using hidden radio buttons for accessible, CSS-only interactivity.

:::componentpreview

## Base state

```html
<div class="pl-accordion-example">
  <dl class="sdv-accordion">
    <input
      type="radio"
      name="sdv-accordion"
      id="sdv-accordion-radio-1"
      aria-labelledby="sdv-accordion-desc-1"
    />
    <dt class="sdv-accordion__header">
      <label for="sdv-accordion-radio-1">Accordion header 1</label>
    </dt>
    <dd id="sdv-accordion-desc-1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
    </dd>

    <input
      type="radio"
      name="sdv-accordion"
      id="sdv-accordion-radio-2"
      aria-labelledby="sdv-accordion-desc-2"
    />
    <dt class="sdv-accordion__header">
      <label for="sdv-accordion-radio-2">Accordion header 2</label>
    </dt>
    <dd id="sdv-accordion-desc-2"><p>Second accordion content.</p></dd>

    <input
      type="radio"
      name="sdv-accordion"
      id="sdv-accordion-radio-3"
      aria-labelledby="sdv-accordion-desc-3"
    />
    <dt class="sdv-accordion__header">
      <label for="sdv-accordion-radio-3">Accordion header 3</label>
    </dt>
    <dd id="sdv-accordion-desc-3"><p>Third accordion content.</p></dd>
  </dl>
</div>
```

## Checkbox state

```html
<div class="pl-accordion-example">
  <dl class="sdv-accordion">
    <input
      type="checkbox"
      name="sdv-accordion"
      id="sdv-accordion-radio-1"
      aria-labelledby="sdv-accordion-desc-1"
    />
    <dt class="sdv-accordion__header">
      <label for="sdv-accordion-radio-1">Accordion header 1</label>
    </dt>
    <dd id="sdv-accordion-desc-1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
    </dd>

    <input
      type="checkbox"
      name="sdv-accordion"
      id="sdv-accordion-radio-2"
      aria-labelledby="sdv-accordion-desc-2"
    />
    <dt class="sdv-accordion__header">
      <label for="sdv-accordion-radio-2">Accordion header 2</label>
    </dt>
    <dd id="sdv-accordion-desc-2"><p>Second accordion content.</p></dd>

    <input
      type="checkbox"
      name="sdv-accordion"
      id="sdv-accordion-radio-3"
      aria-labelledby="sdv-accordion-desc-3"
    />
    <dt class="sdv-accordion__header">
      <label for="sdv-accordion-radio-3">Accordion header 3</label>
    </dt>
    <dd id="sdv-accordion-desc-3"><p>Third accordion content.</p></dd>
  </dl>
</div>
```

:::
