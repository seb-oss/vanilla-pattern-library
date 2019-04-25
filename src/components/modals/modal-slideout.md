---
title: Slideout
componentid: component-slideout
variantid: normal
guid: component-slideout-normal
---

# Usage

Import classes:

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

<a href="#slideout">Open slideout</a>
```

:::
