---
title: Delete button
componentid: component-button
variantid: delete-confirm
guid: component-button-delete-confirm
---

# Usage

Import classes:

```scss
// Will import all button classes
@import '~@sebgroup/vanilla/src/components/buttons/button';

// Will import delete button only
@import '~@sebgroup/vanilla/src/components/buttons/button-delete';
```

:::componentpreview

## Base state
```html
<button class="sdv-button sdv-button-delete-confirm">Delete button</button>
```

## With icon
```html
<button class="sdv-button sdv-button-delete-confirm">
  <i class="far fa-trash-alt sdv-icon-left"></i>Delete button
</button>
```

## Disabled state
```html
<button class="sdv-button sdv-button-delete-confirm" disabled>
  Delete button
</button>
```

## Small version

```html
<button class="sdv-button sdv-button-delete sdv-button--small">
  Delete button
</button>
```
:::

In addition to the classes shown in the example, this component can be used via the following mixins:

```scss
@import '~@sebgroup/vanilla/src/components/buttons/button-mixins';

.my-button-class {
  @include vanilla-button();
}

.my-button-class-delete {
  @include vanilla-button-delete();
}
```

This will create <i>.my-button-class</i> as well as <i>.my-button-class-delete</i>.
