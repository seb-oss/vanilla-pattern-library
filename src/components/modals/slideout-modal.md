---
title: Slideout Modal
componentid: component-slideout-modal
variantid: normal
guid: component-slideout-modal-normal
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/modals/slideout-modal';
```

Use them in your template:

```html
<div class="sdv-slideout-modal sdv-slideout-modal--right">...</div>
<div class="sdv-slideout-modal sdv-slideout-modal--left">...</div>
```

To activate the modal, add the `-active` modifier:

```html
<div class="sdv-slideout-modal sdv-slideout-modal--right -active">
  ...
  <div class="sdv-modal-backdrop"></div>
</div>
```

Please note - the backdrop element has to be a child of the modal, like above (since it depends on its parent's -active class)

---

You can also use the mixins:

```scss
@import '~@sebgroup/vanilla/src/components/modals/slideout-modal-mixins';
@import '~@sebgroup/vanilla/src/components/modals/modal-mixins';

.my-modal-class {
  @include vanilla-modal-slideout();
}
.my-backdrop-class {
  @include vanilla-modal-backdrop();
}
```

---

The width of `.slideout-modal__container` is set to `33%` by default. To override the width to `50%`:

```scss
.sdv-slideout-modal {
  &__container {
    width: 50%;
  }
}
```

For screens smaller or equal to `tablet` the width is set to `100%`.
To override them use the media mixin from the 'include-media' package. For example:

```scss
.sdv-slideout-modal {
  &__container {
    @include media('>=tablet', '<desktop') {
      width: 50%;
    }
  }
}
```

:::componentpreview

## Right

```html
<div class="sdv-slideout-modal sdv-slideout-modal--right -active">
  <div class="sdv-slideout-modal__container">
    <header class="sdv-slideout-modal__header">
      <h3 class="sdv-slideout-modal__heading">Modal Heading</h3>
      <button class="sdv-slideout-modal__close" data-modal-dismiss>
        <i class="fal fa-times"></i>
      </button>
    </header>
    <div class="sdv-slideout-modal__content">
      <h4>Modal Content</h4>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  <div class="sdv-modal-backdrop"></div>
</div>
```

:::
