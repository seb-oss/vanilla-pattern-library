---
title: Filter-tag
componentid: component-filter-tag
variantid: default
guid: component-filter-tag-default
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/filter-tag/filter-tag';
```

In addition to the classes shown in the example below, this component can be used via the following mixins:

```scss
@import '~@sebgroup/vanilla/src/components/filter-tag/filter-tag-mixins';

.my-filter-tag-class {
  @include vanilla-filter-tag();
}
```

:::componentpreview

## Filter tag

```html
<div class="sdv-filter-tag-group">
    <div class="sdv-filter-tag">
        <input id="filter-1" type="checkbox">
        <label for="filter-1">Polen</label>
    </div>
    <div class="sdv-filter-tag">
        <input id="filter-2" type="checkbox">
        <label for="filter-2">United States</label>
    </div>
    <div class="sdv-filter-tag">
        <input id="filter-3" type="checkbox" checked="checked">
        <label for="filter-3">Sweden</label>
    </div>
    <div class="sdv-filter-tag">
        <input id="filter-4" type="checkbox">
        <label for="filter-4">Norway</label>
    </div>
    <div class="sdv-filter-tag">
        <input id="filter-5" type="checkbox">
        <label for="filter-5">Denmark</label>
    </div>
</div>
```
:::
