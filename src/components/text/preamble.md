---
title: Preamble
componentid: seb-preamble
variantid: default
guid: seb-preamble-default
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/text/preamble";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/text/text-mixins";

.my-preamble-class {
    @include vanilla-preamble();
}
```

:::componentpreview
## Base state
```html
<p class="sdv-preamble">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
```
:::
