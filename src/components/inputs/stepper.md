---
title: Stepper input
componentid: component-stepper
variantid: toggle
guid: component-stepper-normal
---
# Usage
Import the classes:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/stepper";
```

Use them in your markup:

```html
<div class="sdv-stepper">
  <button class="sdv-stepper__button"><i class="fal fa-minus"></i></button>
  <div class="sdv-stepper__value">30</div>
  <button class="sdv-stepper__button"><i class="fal fa-plus"></i></button>
</div>
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/inputs/input-mixins";

```
You could either use the component mixin:
```scss
.my-stepper {
    @include vanilla-stepper();
}
```
```html
<div class="my-stepper">
  <button class="my-stepper__button"><i class="fal fa-minus"></i></button>
  ...
</div>
```

Or you can call each mixin individually:

```scss
.my-stepper {
    @include vanilla-stepper-base();
}
.my-stepper-button {
    @include vanilla-stepper__button();
}
.my-stepper-value {
...
```


Please refer to the source code on [Github](https://github.com/sebgroup/vanilla-pattern-library/blob/master/src/components/inputs/_input-mixins.scss) for a full example of how to use the mixins. (see vanilla-stepper)

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
