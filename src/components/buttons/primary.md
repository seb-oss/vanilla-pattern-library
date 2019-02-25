---
title: Primary button
componentid: component-button
variantid: primary
guid: component-button-primary
---
# Usage
Import classes:
```scss
// Will import all button classes
@import "~@sebdesignlibrary/vanilla/src/components/buttons/button";

// Will import primary button only
@import "~@sebdesignlibrary/vanilla/src/components/buttons/button-primary";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebdesignlibrary/vanilla/src/components/buttons/button-mixins";

.my-button-class {
    @include vanilla-button();
}
```
This will create <i>.my-button-class</i> as well as <i>.my-button-class-secondary</i>.

:::componentpreview
## Base state
```html
<button class="sdv-button">Primary button</button>
```

## With icon
```html
<button class="sdv-button"><i class="fal fa-lock sdv-icon-left"></i>Primary button</button>
```

## Disabled state
```html
<button class="sdv-button" disabled>Primary button</button>
```
:::
