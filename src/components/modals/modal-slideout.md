---
title: Slideout
componentid: component-slideout
variantid: normal
guid: component-slideout-normal
---

  # Usage
  There are three ways to use this component.
  1. Import the classes and use them as is
  2. Import the modal-slideout mixin and apply it to your own selector
  3. Import the modal-slideout-mixins and use them in your own structure

  These will be explained in the examples section, below the component preview.

### Component Preview
:::componentpreview

## Right

```html
<div class="sdv-modal-slideout sdv-modal-slideout--right -active">
  <div class="sdv-modal-slideout__container">
    <header class="sdv-modal-slideout__header">
      <h3 class="sdv-modal-slideout__heading">Modal Heading</h3>
      <button class="sdv-modal-slideout__close">
        <i class="fal fa-times"></i>
      </button>
    </header>
    <div class="sdv-modal-slideout__content">
      <h4>Modal Content</h4>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  <div class="sdv-modal-backdrop"></div>
</div>
```


## Left

```html
<div class="sdv-modal-slideout sdv-modal-slideout--left -active">
  <div class="sdv-modal-slideout__container">
    <header class="sdv-modal-slideout__header">
      <h3 class="sdv-modal-slideout__heading">Modal Heading</h3>
      <button class="sdv-modal-slideout__close">
        <i class="fal fa-times"></i>
      </button>
    </header>
    <div class="sdv-modal-slideout__content">
      <h4>Modal Content</h4>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  <div class="sdv-modal-backdrop"></div>
</div>
```

## Interactive left

```html
<div class="sdv-modal-slideout sdv-modal-slideout--left" id="slideout">
  <div class="sdv-modal-slideout__container">
    <header class="sdv-modal-slideout__header">
      <h3 class="sdv-modal-slideout__heading">Modal Heading</h3>
      <button class="sdv-modal-slideout__close">
        <a href="#nothing">
          <i class="fal fa-times"></i>
        </a>
      </button>
    </header>
    <div class="sdv-modal-slideout__content">
      <h4>Modal Content</h4>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  <div class="sdv-modal-backdrop"></div>
</div>

<a href="#slideout">Open slideout</a>
```

:::
### Examples

1 - Import classes:

```scss
@import "~@sebgroup/vanilla/src/components/modals/modal-slideout";
```

Use them in your template:

```html
<div class="sdv-modal-slideout sdv-modal-slideout--right">...</div>
<div class="sdv-modal-slideout sdv-modal-slideout--left">...</div>
```

To activate the modal, add the `-active` modifier:

```html
<div class="sdv-modal-slideout sdv-modal-slideout--right -active">
  ...
  <div class="sdv-modal-backdrop"></div>
</div>
```

Please note - the backdrop element has to be a child of the modal, like above (since it depends on its parent's -active class)

---

2 - Use the modal-slideout mixin:

```scss
@import "~@sebgroup/vanilla/src/components/modals/slideout-mixins";

.my-modal-class {
  @include vanilla-modal-slideout();
}
.my-backdrop-class {
  @include vanilla-modal-backdrop();
}
```



```html
<div class="my-modal-class my-modal-class--right">...</div>
<div class="my-modal-class my-modal-class--left">...</div>
```

To activate the modal, add the `-active` modifier. You can also reassign the modifier with your own name:
```scss

$vanilla-modal-active-state-class: my-active-class;
```

```html
<div class="my-modal-class my-modal-class--right my-active-class">
  ...
  <div class="my-backdrop-class"></div>
</div>
```
By default the modals will be activated by the [:target pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:target).
If you would like to disable this behaviour, call the mixin with false as parameter:
```scss
@include vanilla-modal-slideout($use-target-pseudo-class-for-active-state: false);
@include vanilla-modal-backdrop($use-target-pseudo-class-for-active-state: false);
```
---
3 - Use the slideout mixins directly in your own structure:



```html
<div class="another-class another-class--my-right-modifier">
  <div class="another-class__my-container">
  ...
  </div>
</div>
```
```scss
@import "~@sebgroup/vanilla/src/components/modals/slideout-mixins";

.another-class {
  $__module: &;
  @include vanilla-modal-slideout-base();

  &__my-container {
    @include vanilla-modal-slideout__container();
  }
  &--my-right-modifier {
    #{$__module}__my-container {
      @include vanilla-modal-slideout__container--right();
    }
  }
  &--my-left-modifier {
    #{$__module}__my-container {
      @include vanilla-modal-slideout__container--left();
...
```

Please refer to the source code on [Github](https://github.com/sebgroup/vanilla-pattern-library/blob/master/src/components/modals/_modal-slidout-mixins.scss) for a full example of how to use the mixins. (see vanilla-modal-slideout)

---

The width of `.sdv-modal-slideout__container` is set to `33%` by default. To override the width to `50%`:

```scss
.sdv-modal-slideout {
  &__container {
    width: 50%;
  }
}
```

For screens smaller or equal to `tablet` the width is set to `100%`.
To override them use the media mixin from the 'include-media' package. For example:

```scss
.sdv-modal-slideout {
  &__container {
    @include media(">=tablet", "<desktop") {
      width: 50%;
    }
  }
}
```
