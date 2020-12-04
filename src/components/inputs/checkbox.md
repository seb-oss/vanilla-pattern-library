---
title: Checkbox input
componentid: component-checkbox
variantid: radio
guid: component-checkbox-radio
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/checkbox";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/input-mixins";

.my-checkbox-wrap-class {
    @include vanilla-field-toggle-wrap('checkbox');
}
```

:::componentpreview
## Base state
```html
<div>
    <div class="sdv-field-checkbox-wrap">
        <input type="checkbox" aria-label="Field label" id="sdv-cb1">
        <label for="sdv-cb1">Field label</label>
    </div>
    <div class="sdv-field-checkbox-wrap">
        <input type="checkbox" aria-label="Field label" id="sdv-cb2">
        <label for="sdv-cb2">Field label</label>
    </div>
</div>
```

## Disabled state
```html
<div>
    <div class="sdv-field-checkbox-wrap">
        <input type="checkbox" aria-label="Field label" id="sdv-cb1" disabled checked>
        <label for="sdv-cb1">Field label</label>
    </div>
    <div class="sdv-field-checkbox-wrap">
        <input type="checkbox" aria-label="Field label" id="sdv-cb2" disabled>
        <label for="sdv-cb2">Field label</label>
    </div>
</div>
```

## Error state
```html
<div>
  <div class="sdv-field-group sdv-field-group--error">
      <div class="sdv-field-checkbox-wrap">
          <input type="checkbox" aria-label="Field label" id="sdv-cb1">
          <label for="sdv-cb1">Field label</label>
      </div>
      <div class="sdv-field-checkbox-wrap">
          <input type="checkbox" aria-label="Field label" id="sdv-cb2">
         <label for="sdv-cb2">Field label</label>
      </div>
  </div>
  <div class="sdv-field-notice sdv-field-notice--error">Error text</div>
</div>
```
:::
