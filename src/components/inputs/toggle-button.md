---
title: Toggle button input
componentid: component-togglebutton
variantid: default
guid: component-togglebutton-default
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/toggle-button";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/toggle-button-mixins";

.my-toggle-button {
    @include vanilla-field-toggle-button();
}
```

:::componentpreview
## Base state
```html
<div style="width: 320px; padding: 40px; background-color: #fafafa;">

    <div class="sdv-field-toggle-button">
        <input type="radio" aria-label="Field label" id="sdv-rb1" name="sdv-toggle-button-example">
        <label for="sdv-rb1">This is the label of the toggle button. This text can be rather long.</label>
    </div>

    <br>

    <div class="sdv-field-toggle-button">
        <input type="radio" aria-label="Field label" id="sdv-rb2" name="sdv-toggle-button-example">
        <label for="sdv-rb2">Field label</label>
    </div>

</div>
```

## With icon
```html
<div style="width: 320px; padding: 40px; background-color: #fafafa;">

    <div class="sdv-field-toggle-button">
        <input type="radio" aria-label="Field label" id="sdv-rb1" name="sdv-toggle-button-example">
        <label for="sdv-rb1" class="sdv-icon fa-badger-honey">This is the label of the toggle button. This text can be rather long.</label>
    </div>

    <br>

    <div class="sdv-field-toggle-button">
        <input type="radio" aria-label="Field label" id="sdv-rb2" name="sdv-toggle-button-example">
        <label for="sdv-rb2" class="sdv-icon fa-money-bill-wave">Field label</label>
    </div>

</div>
```

## With icon and left-align text
```html
<div style="width: 320px; padding: 40px; background-color: #fafafa;">

    <div class="sdv-field-toggle-button">
        <input type="radio" aria-label="Field label" id="sdv-rb1" name="sdv-toggle-button-example">
        <label for="sdv-rb1" class="sdv-icon fa-badger-honey sdv-align-left">This is the label of the toggle button. This text can be rather long.</label>
    </div>

    <br>

    <div class="sdv-field-toggle-button">
        <input type="radio" aria-label="Field label" id="sdv-rb2" name="sdv-toggle-button-example">
        <label for="sdv-rb2" class="sdv-icon fa-money-bill-wave sdv-align-left">Field label</label>
    </div>

</div>
```

## Disabled state
```html
<div>
   <div style="width: 320px; padding: 40px; background-color: #fafafa;">

    <div class="sdv-field-toggle-button">
        <input type="radio" aria-label="Field label" id="sdv-rb1" name="sdv-toggle-button-example" disabled>
        <label for="sdv-rb1">This is a disabled toggle button</label>
    </div>

</div>
</div>
```
:::
