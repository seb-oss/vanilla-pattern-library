---
title: Dialog
componentid: component-dialogue
variantid: single-button
guid: component-dialogue-single-button
---
  # Usage
  There are three ways to use this component.
  1. Import the classes and use them as is
  2. Import the modal-dialog mixin and apply it to your own selector
  3. Import the modal-dialog-mixins and use them in your own structure

  These will be explained in the examples section, below the component preview.
### Accessibility

When using this dialog, please take a few minutes to read up on accessibility recomendations for dialogs. Here's an article on that topic: [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role)

### Component preview
:::componentpreview
## Base state
```html
<div class="sdv-modal-dialog -active">
    <div class="sdv-modal-dialog__container" role="dialog" aria-labelledby="sdv-modal-dialog1-title" aria-describedby="sdv-dialog1-body">
        <h2 class="sdv-modal-dialog__heading" id="sdv-dialog1-title">Attention</h2>
        <div class="sdv-modal-dialog__body" id="sdv-dialog1-body">
            <p>Are you sure you want to delete your account: #accountID#?</p>
            <p><strong>Please note that this action can not be undone.</strong>
        </div>
        <div class="sdv-modal-dialog__actions">
            <button class="sdv-button sdv-button-secondary">Cancel</button>
            <button class="sdv-button">Yes, delete it</button>
        </div>
    </div>
     <div class="sdv-modal-backdrop"></div>
</div>
```

## Interactive
```html
<div class="sdv-modal-dialog" id="my-dialog">
    <div class="sdv-modal-dialog__container" role="dialog" aria-labelledby="sdv-modal-dialog1-title" aria-describedby="sdv-dialog1-body">
        <h2 class="sdv-modal-dialog__heading" id="sdv-dialog1-title">Your personal details were successfully updated</h2>
        <p class="sdv-modal-dialog__body" id="sdv-dialog1-body">You can change your details at any time in the user account section.</p>
        <div class="sdv-modal-dialog__actions">
            <a href="#close-dialog" class="sdv-button">Close</a>
        </div>
    </div>
     <div class="sdv-modal-backdrop"></div>
</div>

<a href="#my-dialog" id="close-dialog">Open dialog</a>

:::

### Examples

1 - Import classes:

```scss
@import "~@sebgroup/vanilla/src/components/modals/modal-dialog";
```
Use them in your template:
```html
<div class="sdv-modal-dialog">
    <div class="sdv-modal-dialog__container">...</div>
    <div class="sdv-modal-backdrop"></div>
</div>
```

To activate the modal, add the -active modifier class:

```html
<div class="sdv-modal-dialog -active">
    <div class="sdv-modal-dialog__container">...</div>
    <div class="sdv-modal-backdrop"></div>
</div>
```
Please note - the backdrop element has to be a child of the modal, like above (since it depends on its parent's -active class)

---

2 - Use the modal-dialog mixin:

```scss
@import "~@sebgroup/vanilla/src/components/modals/modal-mixins";

.my-dialog-class {
  @include vanilla-modal-dialog();
}
.my-backdrop-class {
  @include vanilla-modal-backdrop();
}
```

```html
<div class="my-dialog-class">...</div>
```

To activate the modal, add the `-active` modifier. You can also reassign the modifier with your own name:
```scss

$vanilla-modal-active-state-class: my-active-class;
```

```html
<div class="my-dialog-class my-active-class">
  ...
  <div class="my-backdrop-class"></div>
</div>
```
By default the modals will be activated by the [:target pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:target).
If you would like to disable this behaviour, call the mixin with false as parameter:
```scss
@include vanilla-modal-dialog($use-target-pseudo-class-for-active-state: false);
@include vanilla-modal-backdrop($use-target-pseudo-class-for-active-state: false);
```

---
3 - Use the dialog mixins directly in your own structure:

```scss
@import "~@sebgroup/vanilla/src/components/modals/modal-mixins";

.my-dialog {
    @include vanilla-modal-dialog-base();
    &.active-state-class {
        @include vanilla-modal--active();
    }
}
.my-dialog-backdrop {
    @include vanilla-modal-backdrop();
}
.my-dialog-container {
    @include vanilla-modal-dialog__container();
    .active-state-class & {
        @include vanilla-modal-dialog__container--active();
    }
}
.my-dialog-heading {
...
```

Please refer to the source code on [Github](https://github.com/sebgroup/vanilla-pattern-library/blob/master/src/components/modals/_modal-dialog-mixins.scss) for a full example of how to use the mixins. (see vanilla-modal-dialog)

---
