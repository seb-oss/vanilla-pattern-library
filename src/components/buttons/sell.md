---
title: Sell button
componentid: component-button
variantid: sell
guid: component-button-sell
---

# Usage

Import classes:

```scss
// Will import all button classes
@import '~@sebgroup/vanilla/src/components/buttons/button';

// Will import sell button only
@import '~@sebgroup/vanilla/src/components/buttons/button-sell';
```

:::componentpreview

## Base state
```html
<button class="sdv-button sdv-button-sell">Sell button</button>
```

## With icon
```html
<button class="sdv-button sdv-button-sell">
  <i class="far fa-trash-alt sdv-icon-left"></i>Sell button
</button>
```

## Disabled state
```html
<button class="sdv-button sdv-button-sell" disabled>
  Sell button
</button>
```

## Small version

```html
<button class="sdv-button sdv-button-sell sdv-button--small">
  Sell button
</button>
```

## Large version

```html
<button class="sdv-button sdv-button-sell sdv-button--large">
  Sell button
</button>
```
:::

In addition to the classes shown in the example, this component can be used via the following mixins:

```scss
@import '~@sebgroup/vanilla/src/components/buttons/button-mixins';

.my-button-class {
  @include vanilla-button();
}

.my-button-class-sell {
  @include vanilla-button-sell();
}
```

This will create <i>.my-button-class</i> as well as <i>.my-button-class-sell</i>.
