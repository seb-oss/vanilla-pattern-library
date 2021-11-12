---
title: Ghost button
componentid: component-button
variantid: ghost-dark
guid: component-button-ghost-dark
---

# Usage

Import classes:

```scss
// Will import all button classes
@import '~@sebgroup/vanilla/src/components/buttons/button';

// Will import ghost buttons only (light and dark)
@import '~@sebgroup/vanilla/src/components/buttons/button-ghost';
```

In addition to the classes shown in the example below, this component can be used via the following mixins:

```scss
@import '~@sebgroup/vanilla/src/components/buttons/button-mixins';

.my-button-class {
  @include vanilla-button();
}

.my-button-class-ghost-dark {
  @include vanilla-button-ghost-dark();
}
```

This will create <i>.my-button-class</i> as well as <i>.my-button-class-ghost</i>.

:::componentpreview

## Base state

```html
<div class="pl-grey-bg">
  <button class="sdv-button sdv-button-ghost-dark">Primary button</button>
</div>
```

## With icon

```html
<div class="pl-grey-bg">
  <button class="sdv-button sdv-button-ghost-dark">
    <i class="far fa-lock sdv-icon-left"></i>Primary button
  </button>
</div>
```

## Disabled state

```html
<div class="pl-grey-bg">
  <button class="sdv-button sdv-button-ghost-dark" disabled>
    Primary button
  </button>
</div>
```

## Small version

```html
<button class="sdv-button sdv-button-ghost-dark sdv-button--small">
  Ghost button
</button>
```

## Large version

```html
<button class="sdv-button sdv-button-ghost-dark sdv-button--large">
  Ghost button
</button>
```
:::
