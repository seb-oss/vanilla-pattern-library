---
title: Ghost button
componentid: component-button
variantid: ghost-light
guid: component-button-ghost-light
---
# Usage
Import classes:
```scss
// Will import all button classes
@import "~@sebgroup/vanilla/src/components/buttons/button";

// Will import ghost buttons only (light and dark)
@import "~@sebgroup/vanilla/src/components/buttons/button-ghost";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/buttons/button-mixins";

.my-button-class {
    @include vanilla-button();
}

.my-button-class-ghost-light {
    @include vanilla-button-ghost-light();
}
```
This will create <i>.my-button-class</i> as well as <i>.my-button-class-ghost</i>.

:::componentpreview
## Base state
```html
<div class="pl-purple-bg">
    <button class="sdv-button sdv-button-ghost-light">Primary button</button>
</div>
```

## With icon
```html
<div class="pl-purple-bg">
    <button class="sdv-button sdv-button-ghost-light"><i class="fal fa-lock sdv-icon-left"></i>Primary button</button>
</div>
```

## Disabled state
```html
<div class="pl-purple-bg">
    <button class="sdv-button sdv-button-ghost-light" disabled>Primary button</button>
</div>
```
:::
