---
title: Multi line input field
componentid: component-input
variantid: textarea
guid: component-input-textarea
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

// This just modifies the padding slighty for textareas
textarea.my-field-class {
    @include vanilla-text-field-textarea();
}
```

:::componentpreview
## Base state
```html
<div>
    <label for="input-field" class="sdv-field-label">Field label</label>
    <textarea id="input-field" class="sdv-field" aria-label="Field label" placeholder="Input field"></textarea>
</div>
```

## Error state
```html
<div>
    <label for="input-field" class="sdv-field-label">Field label</label>
    <textarea id="input-field" class="sdv-field sdv-field--error" aria-label="Field label" placeholder="Input field"></textarea>
    <div class="sdv-field-notice sdv-field-notice--error">Error text</div>
</div>
```

## Disabled state
```html
<div>
    <label for="input-field" class="sdv-field-label" disabled>Field label</label>
    <textarea id="input-field" class="sdv-field" aria-label="Field label" placeholder="Input field" disabled></textarea>
<div>
```
:::
