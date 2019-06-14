---
title: Sticky summary bar
componentid: component-stickysummarybar
variantid: default
guid: component-stickysummarybar-default
private: false
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/sticky-bars/sticky-bar";
```

Use mixins:
```scss
@import "~@sebgroup/vanilla/src/components/sticky-bars/sticky-bar-mixins";

.my-sticky-bar {
  @include vanilla-sticky-bar();
}

.my-sticky-bar--top {
  @include vanilla-sticky-bar--top();
}
```

:::componentpreview
## Default
```html
<div class="sdv-sticky-bar sdv-sticky-bar--top">
  <div>
    <div>Preliminary amount</div>
    <div class="sdv-h3">3 410 000 kr</div>
  </div>
  <button class="sdv-button">Nästa</button>
</div>
``` 

## Text + text
```html
<div class="sdv-sticky-bar sdv-sticky-bar--top">
  <div>
    <div>Preliminary amount</div>
    <div class="sdv-h3">3 410 000 kr</div>
  </div>
  <div>
    <div>Preliminary amount</div>
    <div class="sdv-h3">3 410 000 kr</div>
  </div>
</div>
``` 
:::
