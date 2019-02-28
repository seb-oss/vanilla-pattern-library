---
title: Two buttons
componentid: component-dialogue
variantid: two-buttons
guid: 31495b40-9492-40e4-86e3-1e06bfc40183
---
# Usage
Import classes:
```scss
@import "~@sebdesignlibrary/vanilla/src/components/dialogs/dialog";
```
When using this dialog, please take a few minutes to read up on accessibility recomendations for dialogs. Here's an article on that topic: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebdesignlibrary/vanilla/src/components/dialogs/dialog-mixins";

.my-dialog-backdrop {
    @include vanilla-dialog-backdrop();
}
.my-dialog {
    @include vanilla-dialog();
}
```

:::componentpreview
## Base state
```html
<div class="sdv-dialog-backdrop">
    <div class="sdv-dialog" role="dialog" aria-labelledby="sdv-dialog1-title" aria-describedby="sdv-dialog1-body">
        <h2 class="sdv-dialog__heading" id="sdv-dialog1-title">Attention</h2>
        <div class="sdv-dialog__body" id="sdv-dialog1-body">
            <p>Are you sure you want to dele this #accountID#?</p>
            <p><strong>Please note that this action can not be undone.</strong></p>
        </div>
        <div class="sdv-dialog__actions">
            <button class="sdv-button sdv-button-secondary">Cancel</button>
            <button class="sdv-button">Yes, delete it</button>
        </div>
    </div>
</div>
```
:::
