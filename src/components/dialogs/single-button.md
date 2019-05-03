---
title: Single button
componentid: component-dialogue
variantid: single-button
guid: component-dialogue-single-button
private: true
---
This component is _deprecated_. Use modal-dialog instead.
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/dialogs/dialog";
```
When using this dialog, please take a few minutes to read up on accessibility recomendations for dialogs. Here's an article on that topic: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role

In addition to the classes shown in the example below, this component can be used via the following mixins:
```scss
@import "~@sebgroup/vanilla/src/components/dialogs/dialog-mixins";

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
        <h2 class="sdv-dialog__heading" id="sdv-dialog1-title">Your personal details were successfully updated</h2>
        <p class="sdv-dialog__body" id="sdv-dialog1-body">You can change your details at any time in the user account section.</p>
        <div class="sdv-dialog__actions">
            <button class="sdv-button">Close</button>
        </div>
    </div>
</div>
```
:::
