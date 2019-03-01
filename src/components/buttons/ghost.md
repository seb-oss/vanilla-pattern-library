---
title: Ghost button
componentid: component-button
variantid: ghost
guid: component-button-ghost
---
# Usage
Import classes:
```scss
// Will import all button classes
@import "~@sebgroup/vanilla/src/components/buttons/button";

// Will import ghost button only
@import "~@sebgroup/vanilla/src/components/buttons/button-ghost";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/buttons/button-mixins";

.my-button-class {
    @include vanilla-button();
}

.my-button-class-ghost {
    @include vanilla-button-ghost();
}
```
This will create <i>.my-button-class</i> as well as <i>.my-button-class-ghost</i>.

:::componentpreview
## Base state
```html
<div class="pl-purple-bg">
    <button class="sdv-button sdv-button-ghost">Primary button</button>
</div>
```

## With icon
```html
<div class="pl-purple-bg">
    <button class="sdv-button sdv-button-ghost"><i class="fal fa-lock sdv-icon-left"></i>Primary button</button>
</div>
```

## Disabled state
```html
<div class="pl-purple-bg">
    <button class="sdv-button sdv-button-ghost" disabled>Primary button</button>
</div>
```
:::
