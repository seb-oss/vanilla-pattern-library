---
title: Sticky button bar
componentid: component-stickybuttonbar
variantid: default
guid: component-stickybuttonbar-default
private: false
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/sticky-bars/sticky-bar";
```

Use mixins to create your own class names:
```scss
@import "~@sebgroup/vanilla/src/components/sticky-bars/sticky-bar-mixins";

.my-sticky-bar {
  @include vanilla-sticky-bar();
}

.my-sticky-bar--bottom {
  @include vanilla-sticky-bar--bottom();
}
```

:::componentpreview
## Default
```html
<div class="sdv-sticky-bar sdv-sticky-bar--bottom">
  <button class="sdv-button sdv-button-secondary">Tillbaka</button>
  <button class="sdv-button">Nästa</button>
</div>
```

## Text + button
```html
<div class="sdv-sticky-bar sdv-sticky-bar--bottom">
  <div>
    <div>Preliminary amount</div>
    <div class="sdv-h3">3 410 000 kr</div>
  </div>
  <button class="sdv-button">Nästa</button>
</div>
``` 
:::
