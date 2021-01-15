---
title: Chip
componentid: component-chip
variantid: default
guid: component-chip-default
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/chip/chip';
```

In addition to the classes shown in the example below, this component can be used via the following mixins:

```scss
@import '~@sebgroup/vanilla/src/components/chip/chip-mixins';

.my-chip-class {
  @include vanilla-chip();
}
```

:::componentpreview

## Chip

```html
<button class="sdv-chip" aria-label="Remove filter">Räntefond</button>
```

## Chip Group

```html
<div class="sdv-chip-group">
  <button class="sdv-chip">Europa</button>
  <button class="sdv-chip">Globala</button>
  <button class="sdv-chip">Sverige & norden</button>
  <button class="sdv-chip">Strategi & lösningsfonder</button>
</div>
```
:::
