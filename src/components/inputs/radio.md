---
title: Radio input
componentid: component-radiobutton
variantid: radio
guid: component-radiobutton-radio
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/radio";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/input-mixins";

.my-radio-wrap-class {
    @include vanilla-field-radio-wrap();
}
```

:::componentpreview
## Base state
```html
<div>
    <div class="sdv-field-radio-wrap">
        <input type="radio" name="radio1" aria-label="Field label" id="sdv-radio1-1">
        <label for="sdv-radio1-1">Field label</label>
    </div>
    <div class="sdv-field-radio-wrap">
        <input type="radio" name="radio1" aria-label="Field label" id="sdv-radio1-2">
        <label for="sdv-radio1-2">Field label</label>
    </div>
</div>
```

## Disabled state
```html
<div>
    <div class="sdv-field-radio-wrap">
        <input type="radio" name="radio1" aria-label="Field label" id="sdv-radio1-1" disabled checked>
        <label for="sdv-radio1-1">Field label</label>
    </div>
    <div class="sdv-field-radio-wrap">
        <input type="radio" name="radio1" aria-label="Field label" id="sdv-radio1-2" disabled>
        <label for="sdv-radio1-2">Field label</label>
    </div>
</div>
```
:::
