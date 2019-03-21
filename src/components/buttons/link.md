---
title: Link button
componentid: component-button
variantid: link
guid: component-button-link
---
# Usage
Import classes:
```scss
// Will import all button classes
@import "~@sebgroup/vanilla/src/components/buttons/button";

// Will import link button only
@import "~@sebgroup/vanilla/src/components/buttons/button-link";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/buttons/button-mixins";

.my-button-class {
    @include vanilla-button();
}
.my-button-class-link {
    @include vanilla-button-link();
}
```
This will create <i>.my-button-class</i> as well as <i>.my-button-class-link</i>.

:::componentpreview
## Base state
```html
<button class="sdv-button sdv-button-link">Link Button</button>
```

## With icon
```html
<button class="sdv-button sdv-button-link"><i class="fal fa-lock sdv-icon-left"></i>Link Button</button>
```

## Disabled state
```html
<button class="sdv-button sdv-button-link" disabled>Link Button</button>
```

## Small version
```html
<button class="sdv-button sdv-button-link sdv-button--small">Link button</button>
```
:::
