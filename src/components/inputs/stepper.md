---
title: Stepper input
componentid: component-stepper
variantid: toggle
guid: component-stepper-normal
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/stepper";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/input-mixins";

```

:::componentpreview
## Base state
```html
<div class="sdv-stepper">
    <button class="sdv-stepper__button"><i class="fal fa-minus"></i></button>
    <div class="sdv-stepper__value">30</div>
    <button class="sdv-stepper__button"><i class="fal fa-plus"></i></button>
</div>
```
## Disabled
```html
<div class="sdv-stepper" disabled>
    <button class="sdv-stepper__button" disabled><i class="fal fa-minus"></i></button>
    <div class="sdv-stepper__value">30</div>
    <button class="sdv-stepper__button" disabled><i class="fal fa-plus"></i></button>
</div>
```
:::
