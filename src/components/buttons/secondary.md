---
title: Secondary button
componentid: component-button
variantid: secondary
guid: component-button-secondary
---
# Usage
Import classes:
```scss
// Will import all button classes
@import "~@sebgroup/vanilla/src/components/buttons/button";

// Will import secondary button only
@import "~@sebgroup/vanilla/src/components/buttons/button-secondary";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/buttons/button-mixins";

.my-button-class {
    @include vanilla-button();
}
.my-button-class-secondary {
    @include vanilla-button-secondary();
}
```
This will create <i>.my-button-class</i> as well as <i>.my-button-class-secondary</i>.

:::componentpreview
## Base state
```html
<button class="sdv-button sdv-button-secondary">Secondary button</button>
```

## With icon
```html
<button class="sdv-button sdv-button-secondary"><i class="fal fa-lock sdv-icon-left"></i>Secondary button</button>
```

## Disabled state
```html
<button class="sdv-button sdv-button-secondary" disabled>Secondary button</button>
```

## Small version
```html
<button class="sdv-button sdv-button-secondary sdv-button--small">Secondary button</button>
```
:::
