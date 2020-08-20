---
title: Badge
componentid: component-badge
variantid: default
guid: component-badge-default
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/badge/badge';
```

In addition to the classes shown in the example below, this component can be used via the following mixins:

```scss
@import '~@sebgroup/vanilla/src/components/badge/badge-mixins';

.my-badge-class {
  @include vanilla-badge();
}
```

:::componentpreview

## Information

```html
<div class="sdv-badge sdv-badge--info">
  Information
</div>
```

## Success

```html
<div class="sdv-badge sdv-badge--success">
  Success
</div>
```

## Warning

```html
<div class="sdv-badge sdv-badge--warning">
  Warning
</div>
```

## Critical & Error

```html
<div class="sdv-badge sdv-badge--error">
  Error
</div>
```
:::
