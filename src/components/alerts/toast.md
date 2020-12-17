---
title: Toast
componentid: component-toast
variantid: default
guid: component-toast
---

# Usage
The toast component has four different states: information, success, warning and critical.

There are three ways to use this component.

1. Import the classes and use them as is
2. Import the toast mixin and apply it to your own selector
3. Import the toast-mixins and use them in your own structure

These will be explained in the examples section, below the component preview.

### Component preview

:::componentpreview

## Information

```html
<div class="sdv-toast sdv-toast--information" role="alert">
    <i class="fas fa-info-square"></i>
    <p class="sdv-toast__body"><strong>Information!</strong> Please note that this lorem ipsum <a href="#">can contain a link</a> and more text</p>
    <button class="sdv-toast__close"></button>
</div>
```

## Success

```html
<div class="sdv-toast sdv-toast--success" role="alert">
    <i class="fas fa-check"></i>
    <p class="sdv-toast__body"><strong>Well done!</strong> Please note that this lorem ipsum <a href="#">can contain a link</a> and more text</p>
    <button class="sdv-toast__close"></button>
</div>
```

## Warning

```html
<div class="sdv-toast sdv-toast--warning" role="alert">
    <i class="fas fa-exclamation-square"></i>
    <p class="sdv-toast__body"><strong>Warning!</strong> Please note that this lorem ipsum <a href="#">can contain a link</a> and more text</p>
    <button class="sdv-toast__close"></button>
</div>
```

## Critical

```html
<div class="sdv-toast sdv-toast--critical" role="alert">
    <i class="fas fa-exclamation-square"></i>
    <p class="sdv-toast__body"><strong>Error!</strong> Please note that this lorem ipsum <a href="#">can contain a link</a> and more text</p>
    <button class="sdv-toast__close"></button>
</div>
```

## Timeline

```html
<div class="sdv-toast sdv-toast--success sdv-toast--timeline" role="alert" aria-live="assertive">
    <i class="fas fa-check"></i>
    <p class="sdv-toast__body"><strong>Well done!</strong> Please note that this lorem ipsum <a href="#">can contain a link</a> and more text</p>
    <button class="sdv-toast__close"></button>
</div>
```

:::

### Examples

1 - Import classes:

```scss
@import "~@sebgroup/vanilla/src/components/alerts/toast";
````

Use them in your template:

```html
<div class="sdv-toast sdv-toast--warning" role="alert">
    <i class="fas fa-exclamation-square"></i>
    <p class="sdv-toast__body"><strong>Warning!</strong> Please note that this lorem ipsum <a href="#">can contain a link</a> and more text</p>
    <button class="sdv-toast__close"></button>
</div>
```

---

2 - Use the toast mixin:

```scss
@import '~@sebgroup/vanilla/src/components/alerts/toast-mixins';

.my-alert-class {
  @include vanilla-toast();
}
```

```html
<div class="my-alert-class">...</div>
```

---

3 - Use the alert mixins directly in your own structure:

```scss
@import "~@sebgroup/vanilla/src/components/alerts/toast-mixins";

.my-alert {
    @include vanilla-toast-base();

    .my-body {
        @include vanilla-toast__body();
    }
}
```

Please refer to the source code on [Github](https://github.com/sebgroup/vanilla-pattern-library/blob/master/src/components/alerts/_toast-mixins.scss) for a full example of how to use the mixins. (see vanilla-toast)

---


