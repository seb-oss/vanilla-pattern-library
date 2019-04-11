---
title: Slideout
componentid: component-slideout
variantid: normal
guid: component-slideout-normal
---

# Usage

Import classes:

```scss
@import "~@sebgroup/vanilla/src/components/modals/slideout";
```

Use them in your template:

```html
<div class="sdv-slideout sdv-slideout--right">...</div>
<div class="sdv-slideout sdv-slideout--left">...</div>
```

To activate the modal, add the `-sdv-modal-active` modifier:

```html
<div class="sdv-slideout sdv-slideout--right -sdv-modal-active">
  ...
  <div class="sdv-modal-backdrop"></div>
</div>
```

Please note - the backdrop element has to be a child of the modal, like above (since it depends on its parent's -sdv-modal-active class)

---

You can also use the mixins:

```scss
@import "~@sebgroup/vanilla/src/components/modals/slideout-mixins";
@import "~@sebgroup/vanilla/src/components/modals/modal-mixins";

.my-modal-class {
  @include vanilla-slideout();
}
.my-backdrop-class {
  @include vanilla-modal-backdrop();
}
```

---

The width of `.slideout__container` is set to `33%` by default. To override the width to `50%`:

```scss
.sdv-slideout {
  &__container {
    width: 50%;
  }
}
```

For screens smaller or equal to `tablet` the width is set to `100%`.
To override them use the media mixin from the 'include-media' package. For example:

```scss
.sdv-slideout {
  &__container {
    @include media(">=tablet", "<desktop") {
      width: 50%;
    }
  }
}
```

:::componentpreview

## Right

```html
<div class="sdv-slideout sdv-slideout--right -sdv-modal-active">
  <div class="sdv-slideout__container">
    <header class="sdv-slideout__header">
      <h3 class="sdv-slideout__heading">Modal Heading</h3>
      <button class="sdv-slideout__close">
        <i class="fal fa-times"></i>
      </button>
    </header>
    <div class="sdv-slideout__content">
      <h4>Modal Content</h4>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  <div class="sdv-modal-backdrop"></div>
</div>
```


## Left

```html
<div class="sdv-slideout sdv-slideout--left -sdv-modal-active">
  <div class="sdv-slideout__container">
    <header class="sdv-slideout__header">
      <h3 class="sdv-slideout__heading">Modal Heading</h3>
      <button class="sdv-slideout__close">
        <i class="fal fa-times"></i>
      </button>
    </header>
    <div class="sdv-slideout__content">
      <h4>Modal Content</h4>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  <div class="sdv-modal-backdrop"></div>
</div>
```

## Interactive left

```html
<div class="sdv-slideout sdv-slideout--right" id="slideout">
  <div class="sdv-slideout__container">
    <header class="sdv-slideout__header">
      <h3 class="sdv-slideout__heading">Modal Heading</h3>
      <button class="sdv-slideout__close">
        <i class="fal fa-times"></i>
      </button>
    </header>
    <div class="sdv-slideout__content">
      <h4>Modal Content</h4>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  <div class="sdv-modal-backdrop"></div>
</div>

<a href="#slideout">Open slideout</a>
```

:::
