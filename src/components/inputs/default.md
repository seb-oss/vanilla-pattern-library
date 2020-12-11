---
title: Default input field
componentid: component-input
variantid: default
guid: component-input-default
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/inputs/input_base';
```

In addition to the classes shown in the example below, this component can be used via the following mixins:

```scss
@import '~@sebgroup/vanilla/src/components/inputs/input-mixins';

.my-field-class {
  @include vanilla-text-field();
}

.my-field-label-class {
  @include vanilla-field-label();
}
```

:::componentpreview

## Base state

```html
<div>
  <label for="input-field" class="sdv-field-label">Field label</label>
  <input
    id="input-field"
    class="sdv-field"
    aria-label="Field label"
    placeholder="Input field"
  />
</div>
```

## Error state

```html
<div>
  <label for="input-field" class="sdv-field-label">Field label</label>
  <input
    id="input-field"
    class="sdv-field sdv-field--error"
    aria-label="Field label"
    placeholder="Input field"
  />
  <div class="sdv-field-notice sdv-field-notice--error">Error text</div>
</div>
```

## Disabled state

```html
<div>
  <label for="input-field" class="sdv-field-label" disabled>Field label</label>
  <input
    id="input-field"
    class="sdv-field"
    aria-label="Field label"
    placeholder="Input field"
    disabled
  />
  <div></div>
</div>
```

## With text or icon appended

```html
<div>
  <label for="input-field" class="sdv-field-label">Field label</label>
  <div class="sdv-field-wrap">
    <span class="sdv-field__after">SEK</span>
    <input
      id="input-field"
      class="sdv-field"
      aria-label="Field label"
      placeholder="Input field"
    />
  </div>
</div>
```

## Small version

```html
<div>
  <input
    id="input-field"
    class="sdv-field sdv-field--small"
    aria-label="Field label"
    placeholder="Input field"
  />
</div>
```

:::
