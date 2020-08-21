---
title: Segmented control
componentid: component-segmented-control
variantid: default
guid: component-segmented-control-default
---

# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/segmented-control/segmented-control";
```

Framework needed! This mixin only contains the styles for the segmented control. Actual behaviour needs to be implemented using a JS framework.

:::componentpreview

## Three button segment

```html

  <div class="sdv-segmented-control">
    <button class="sdv-button sdv-button-secondary">Mobile Bank ID</button>
    <button class="sdv-button sdv-button-secondary">Digipass</button>
    <button class="sdv-button sdv-button-secondary">Bank ID on file</button>
  </div>

```

## Two button segment
```html
<div class="sdv-segmented-control">
  <button class="sdv-button sdv-button-secondary">Mobile Bank ID</button>
  <button class="sdv-button sdv-button-secondary">Bank ID on file</button>
</div>
```

## Five button segment
```html
<div class="sdv-segmented-control">
  <button class="sdv-button sdv-button-secondary">Mobile Bank ID</button>
  <button class="sdv-button sdv-button-secondary">Digipass 1</button>
  <button class="sdv-button sdv-button-secondary">Digipass 2</button>
  <button class="sdv-button sdv-button-secondary">Digipass 3</button>
  <button class="sdv-button sdv-button-secondary">Bank ID on file</button>
</div>
```

## Small segment
```html
<div class="sdv-segmented-control">
  <button class="sdv-button sdv-button--small sdv-button-secondary">Mobile Bank ID</button>
  <button class="sdv-button sdv-button--small sdv-button-secondary">Digipass</button>
  <button class="sdv-button sdv-button--small sdv-button-secondary">Bank ID on file</button>
</div>
```

## Selected active segment

```html
<div class="sdv-segmented-control">
  <button class="sdv-button sdv-button-secondary">Mobile Bank ID</button>
  <button class="sdv-button sdv-button-secondary sdv-segmented-control--active">Digipass</button>
  <button class="sdv-button sdv-button-secondary">Bank ID on file</button>
</div>
```

## Disabled segment
```html
<div class="sdv-segmented-control">
  <button class="sdv-button sdv-button-secondary">Mobile Bank ID</button>
  <button class="sdv-button sdv-button-secondary">Digipass</button>
  <button disabled class="sdv-button sdv-button-secondary">Bank ID on file</button>
</div>
```
:::
