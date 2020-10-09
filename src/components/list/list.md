---
title: List
componentid: component-list
variantid: default
guid: component-list-default
---

# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/list/list";
```
Supports ul, dl and div elements as lists. The wrapper is not strictly necessary if the parent element does not use 'display: flex'. If the wrapper is not used, the gray label gets its styling by applying the 'sdv-list__label'-class.

By default, all text in the value-column is right-aligned. This can be overwritten by using the 'sdv-list__item-value--left'-class.

For smaller screens, sdv-list--small can be used in order to place the label above the value.

:::componentpreview

## Using ul
```html
<div class="sdv-list__wrapper">
  <label class="sdv-list__label">Label</label>
  <ul class="sdv-list">
    <li>
      <div class="sdv-list__item-label">Label, 16px regular</div>
      <div class="sdv-list__item-value">Value, 16px medium</div>
    </li>
    <li>
      <div class="sdv-list__item-label">Label, 16px regular</div>
      <div class="sdv-list__item-value">Value, 16px medium</div>
    </li>
  </ul>
  <label class="sdv-list-label">Label</label>
  <ul class="sdv-list">
    <li>
      <div class="sdv-list__item-label">Label, 16px regular</div>
      <div class="sdv-list__item-value">Value, 16px medium</div>
    </li>
    <li>
      <div class="sdv-list__item-label">Label, 16px regular</div>
      <div class="sdv-list__item-value">Value, 16px medium</div>
    </li>
  </ul>
</div>
```
## Using dl and wrapper
```html
<div class="sdv-list__wrapper">
  <label>Label</label>
  <dl class="sdv-list">
    <div class="sdv-list__item">
      <dt>Label, 16px regular</dt>
      <dd>Value, 16px medium</dd>
    </div>
    <div class="sdv-list__item">
      <dt>Label, 16px regular</dt>
      <dd>Value, 16px medium</dd>
    </div>
  </dl>
  <label>Label</label>
  <dl class="sdv-list">
    <div class="sdv-list__item">
      <dt>Label, 16px regular</dt>
      <dd>Value, 16px medium</dd>
    </div>
    <div class="sdv-list__item">
      <dt>Label, 16px regular</dt>
      <dd>Value, 16px medium</dd>
    </div>
  </dl>
</div>
```
## Using block elements
```html
<div class="sdv-list__wrapper">
  <label>Label</label>
  <div class="sdv-list">
    <div class="sdv-list__item">
      <div class="sdv-list__item-label">Label, 16px regular</div>
      <div class="sdv-list__item-value">Value, 16px medium</div>
    </div>
    <div class="sdv-list__item">
      <div class="sdv-list__item-label">Label, 16px regular</div>
      <div class="sdv-list__item-value">Value, 16px medium</div>
    </div>
  </div>
  <label>Label</label>
  <div class="sdv-list">
    <div class="sdv-list__item">
      <div class="sdv-list__item-label">Label, 16px regular</div>
      <div class="sdv-list__item-value">Value, 16px medium</div>
    </div>
    <div class="sdv-list__item">
      <div class="sdv-list__item-label">Label, 16px regular</div>
      <div class="sdv-list__item-value">Value, 16px medium</div>
    </div>
  </div>
</div>
```
:::
