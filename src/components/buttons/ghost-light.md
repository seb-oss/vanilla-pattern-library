---
title: Ghost button
componentid: component-button
variantid: ghost-light
guid: component-button-ghost-light
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

.my-button-class-ghost-light {
  @include vanilla-button-ghost-light();
}
```

This will create <i>.my-button-class</i> as well as <i>.my-button-class-ghost</i>.

:::componentpreview

## Base state

```html
<div class="pl-dark-bg">
  <button class="sdv-button sdv-button-ghost-light">Ghost button</button>
</div>
```

## With icon

```html
<div class="pl-dark-bg">
  <button class="sdv-button sdv-button-ghost-light">
    <i class="far fa-lock sdv-icon-left"></i>Ghost button
  </button>
</div>
```

## Disabled state

```html
<div class="pl-dark-bg">
  <button class="sdv-button sdv-button-ghost-light" disabled>
    Ghost button
  </button>
</div>
```

## Small version

```html
<button class="sdv-button sdv-button-ghost-light sdv-button--small">
  Ghost button
</button>
```

## Large version

```html
<button class="sdv-button sdv-button-ghost-light sdv-button--large">
  Ghost button
</button>
```

:::
