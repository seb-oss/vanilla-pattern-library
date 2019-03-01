---
title: Toggle switch input
componentid: component-toggleswitch
variantid: toggle
guid: component-toggleswitch-toggle
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/switch";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/input-mixins";

.my-switch-wrap-class {
    @include vanilla-field-toggle-wrap('switch');
}
```

:::componentpreview
## Base state
```html
<div>
    <div class="sdv-field-switch-wrap">
        <input type="checkbox" aria-label="Field label" id="sdv-cb1">
        <label for="sdv-cb1">Field label</label>
    </div>
    <div class="sdv-field-switch-wrap">
        <input type="checkbox" aria-label="Field label" id="sdv-cb2">
        <label for="sdv-cb2">Field label</label>
    </div>
</div>
```

## Disabled state
```html
<div>
    <div class="sdv-field-switch-wrap">
        <input type="checkbox" aria-label="Field label" id="sdv-cb1" disabled checked>
        <label for="sdv-cb1">Field label</label>
    </div>
    <div class="sdv-field-switch-wrap">
        <input type="checkbox" aria-label="Field label" id="sdv-cb2" disabled>
        <label for="sdv-cb2">Field label</label>
    </div>
</div>
```
:::
