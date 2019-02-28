---
title: Alternative button
componentid: component-button
variantid: alternative
guid: component-button-alternative
---
# Usage
Import classes:
```scss
// Will import all button classes
@import "~@sebdesignlibrary/vanilla/src/components/buttons/button";

// Will import alternative button only
@import "~@sebdesignlibrary/vanilla/src/components/buttons/button-alternative";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebdesignlibrary/vanilla/src/components/buttons/button-mixins";

.my-button-class {
    @include vanilla-button();
}
.my-button-class-alternative {
    @include vanilla-button-alternative();
}
```
This will create <i>.my-button-class</i> as well as <i>.my-button-class-alternative</i>.

:::componentpreview
## Base state
```html
<button class="sdv-button sdv-button-alternative">Alternative button</button>
```

## With icon
```html
<button class="sdv-button sdv-button-alternative"><i class="fal fa-lock sdv-icon-left"></i>Alternative button</button>
```

## Disabled state
```html
<button class="sdv-button sdv-button-alternative" disabled>Alternative button</button>
```
:::
