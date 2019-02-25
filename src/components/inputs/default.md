---
title: Default input field
componentid: component-input
variantid: default
guid: 31495b40-9492-40e4-86e3-465f344fd
---
# Usage
Import classes:
```scss
@import "~@sebdesignlibrary/vanilla/src/components/inputs/input_base";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebdesignlibrary/vanilla/src/components/inputs/input-mixins";

.my-field-class {
    @include vanilla-field-base();
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
    <input id="input-field" class="sdv-field" aria-label="Field label" placeholder="Input field">
</div>
```

## Error state
```html
<div>
    <label for="input-field" class="sdv-field-label">Field label</label>
    <input id="input-field" class="sdv-field sdv-field--error" aria-label="Field label" placeholder="Input field">
    <div class="sdv-field-notice sdv-field-notice--error">Error text</div>
</div>
```

## Disabled state
```html
<div>
    <label for="input-field" class="sdv-field-label" disabled>Field label</label>
    <input id="input-field" class="sdv-field" aria-label="Field label" placeholder="Input field" disabled>
<div>
```
:::
