---
title: Breadcrumbs
componentid: component-breadcrumbs
variantid: primary
guid: component-breadcrumbs-primary
---

# Usage

__Please note:__ The breadcrumbs component is provided in two alternative versions. Both of them use the same mixin: `vanilla-breadcrumbs`, but they differ in markup structure (and some modifier classes).

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
### Simple
The simple version is quite straightforward and it's accessible to screen readers and tab navigation. But it comes with one caveat - If the breadcrumbs take up more horizontal space than their container, the overflowing items will simply collapse to the next row.

If you know your breadcrumbs will not grow too wide, or if you want to implement the truncation in js - go ahead and use this one.

```html
<nav aria-label="Breadcrumb" class="sdv-breadcrumbs">
  <ol class="sdv-breadcrumbs__list">
    <li class="sdv-breadcrumbs__item"><a href="#">Home</a></li>
    ...
    <li class="sdv-breadcrumbs__item -parent"><a href="#">Features</a></li>
    <li aria-current="page" class="sdv-breadcrumbs__item -current">Library</li>
  </ol>
</nav>
```
---
### Reverse truncation
This version follows the guidelines from [Design library](https://designlibrary.sebgroup.com/components/breadcrumbs/#usage) which recommend that the breadcrumbs are truncated after the root level item.


```html
<nav class="sdv-breadcrumbs -reverse-truncation">
  <ol class="sdv-breadcrumbs__list">
    <div class="sdv-breadcrumbs__root">
      <li class="sdv-breadcrumbs__item">
      <a href="#">Root level</a>
      ...
      </li>
    </div>
    <div class="sdv-breadcrumbs__reverse">
      <li aria-current="page" class="sdv-breadcrumbs__item -current">Current page</li>
      <li class="sdv-breadcrumbs__item -parent"><a href="#">One level up</a></li>
      ...
      <li class="sdv-breadcrumbs__item"><a href="#">Level 1</a></li>
    </div>
  </ol>
```
This makes a good visual representation of the navigation but our current implementation uses flexbox and a reverse source order of the items in order to achieve the truncation. This is semantically incorrect and messes up tab navigation and makes it hard for screen readers to make sense of the hierarchy.

Do you have an idea of how this could be implemented in a better way? Don't hesitate to send us a message or make a pull request.


---
## Component preview

:::componentpreview

## Simple

```html
<nav aria-label="Breadcrumb" class="sdv-breadcrumbs">
  <ol class="sdv-breadcrumbs__list">
    <li class="sdv-breadcrumbs__item"><a href="#">Home</a></li>
    <li class="sdv-breadcrumbs__item -parent"><a href="#">Features</a></li>
    <li aria-current="page" class="sdv-breadcrumbs__item -current">Library</li>
  </ol>
</nav>
```

## Simple deep

```html
<nav aria-label="Breadcrumb" class="sdv-breadcrumbs">
  <ol class="sdv-breadcrumbs__list">
    <li class="sdv-breadcrumbs__item"><a href="#">Home</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Features</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Library</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Philosophy & psychology</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Metaphysics</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Time</a></li>
      <li class="sdv-breadcrumbs__item"><a href="#">Absolutism and relationalism</a></li>
      <li class="sdv-breadcrumbs__item -parent"><a href="#">Mach</a></li>
      <li aria-current="page" class="sdv-breadcrumbs__item -current">Mach's principle</li>
  </ol>
</nav>
```
## Reverse truncation

```html
<nav aria-label="Breadcrumb" class="sdv-breadcrumbs -reverse-truncation">
  <ol class="sdv-breadcrumbs__list">
    <div class="sdv-breadcrumbs__root">
      <li class="sdv-breadcrumbs__item">
        <a tabindex="-1" href="#">Home</a>
        <div class="sdv-breadcrumbs__trunc-icons">
          <div class="-ellipsis"></div>
          <div class="-chevron"></div>
        </div>
      </li>
    </div>
    <div class="sdv-breadcrumbs__reverse">
      <li aria-current="page" class="sdv-breadcrumbs__item -current">Mach's principle</li>
      <li class="sdv-breadcrumbs__item -parent"><a tabindex="-1" href="#">Mach</a></li>
      <li class="sdv-breadcrumbs__item"><a tabindex="-1" href="#">Absolutism and relationalism</a></li>
      <li class="sdv-breadcrumbs__item"><a tabindex="-1" href="#">Time</a></li>
      <li class="sdv-breadcrumbs__item"><a tabindex="-1" href="#">Metaphysics</a></li>
      <li class="sdv-breadcrumbs__item"><a tabindex="-1" href="#">Philosophy & psychology</a></li>
      <li class="sdv-breadcrumbs__item"><a tabindex="-1" href="#">Library</a></li>
      <li class="sdv-breadcrumbs__item"><a tabindex="-1" href="#">Features</a></li>
    </div>
  </ol>
</nav>

:::

### More on accessibility
