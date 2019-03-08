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

:::componentpreview

## Base state

```html
<nav class="sdv-breadcrumbs">
  <ol class="sdv-breadcrumbs__list">
    <li class="sdv-breadcrumbs__item"><a href="#">Home</a></li>
    <li class="sdv-breadcrumbs__item -parent"><a href="#">Features</a></li>
    <li class="sdv-breadcrumbs__item -current">Library</li>
  </ol>
</nav>
```

## Deep state

```html
<nav class="sdv-breadcrumbs">
  <ol class="sdv-breadcrumbs__list">
    <li class="sdv-breadcrumbs__item"><a href="#">Home</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Features</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Library</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Philosophy & psychology</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Metaphysics</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Time</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Absolutism and relationalism</a></li>
      <li class="sdv-breadcrumbs__item -parent"><a href="#">Mach</a></li>
      <li class="sdv-breadcrumbs__item -current">Mach's principle</li>
  </ol>
</nav>
```
## Deep reverse collapse

```html
<nav class="sdv-breadcrumbs">
  <ol class="sdv-breadcrumbs__list">
    <div class="sdv-breadcrumbs__root">
      <li class="sdv-breadcrumbs__item"><a href="#">Home</a></li>
    </div>
    <div class="sdv-breadcrumbs__collapse">
      <li class="sdv-breadcrumbs__item"><a href="#">Absolutism and relationalism</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Time</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Metaphysics</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Philosophy & psychology</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Library</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Features</a></li>
    </div>
    <div class="sdv-breadcrumbs__remain">
      <li class="sdv-breadcrumbs__item -parent"><a href="#">Mach</a></li>
      <li class="sdv-breadcrumbs__item -current">Mach's principle</li>
    </div>
  </ol>
</nav>

:::
