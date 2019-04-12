---
title: Breadcrumbs
componentid: component-breadcrumbs
variantid: primary
guid: component-breadcrumbs-primary
---

# Usage

Import classes:

```scss
@import "~@sebgroup/vanilla/src/components/breadcrumbs/breadcrumbs";
```

In addition to the classes shown in the example below, this component can be used via the following mixins:

```scss
@import "~@sebgroup/vanilla/src/components/breadcrumbs/breadcrumbs-mixins";

.my-breadcrumbs-class {
  @include vanilla-breadcrumbs();
}
```
---
### Framework needed!
When only using CSS, and if the breadcrumbs take up more horizontal space than their container, the overflowing items will simply collapse to the next row.

In order for breadcrumbs to behave properly, a JS implementation is required. The implementation needs to measure available space, and add the modifier class `.-hidden` to the second to nth items until the remaining items fit on one row. The first item ("home") should remain visible.

The first item following a hidden item will be preceded by an ellipsis to indicate that some items are hidden. See the _Some items hidden_ state below (click _Show details_ to select state).

---
## Component preview

:::componentpreview

## All items visible
```html
<nav aria-label="Breadcrumbs" class="sdv-breadcrumbs">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li><a href="#">Library</a></li>
    <li><a href="#">Philosophy & psychology</a></li>
    <li><a href="#">Metaphysics</a></li>
    <li><a href="#">Time</a></li>
    <li><a href="#">Absolutism and relationalism</a></li>
    <li><a href="#">Mach</a></li>
    <li aria-current="page">Mach's principle</li>
  </ol>
</nav>
```

## Some items hidden
```html
<nav aria-label="Breadcrumbs" class="sdv-breadcrumbs">
  <ol>
    <li><a href="#">Home</a></li>
    <li class="-hidden"><a href="#">Features</a></li>
    <li class="-hidden"><a href="#">Library</a></li>
    <li><a href="#">Philosophy & psychology</a></li>
    <li><a href="#">Metaphysics</a></li>
    <li><a href="#">Time</a></li>
    <li><a href="#">Absolutism and relationalism</a></li>
    <li><a href="#">Mach</a></li>
    <li aria-current="page">Mach's principle</li>
  </ol>
</nav>
```

:::

### More on accessibility
