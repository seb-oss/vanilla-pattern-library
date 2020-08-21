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
Supports using radio buttons, checkboxes, divs/spans and/or buttons. Can also be used as a wrapper to group buttons.
When not using any of the input elements, active state is applied using aria-selected attribute.

:::componentpreview

## Three segments using radio buttons
```html
  <div class="sdv-segmented-control">
    <input type="radio" id="sdv-control-1" name="sdv-control">
    <label for="sdv-control-1" class="sdv-button sdv-button-secondary">Mobile Bank ID</label>
    <input type="radio" id="sdv-control-2" name="sdv-control">
    <label for="sdv-control-2" class="sdv-button sdv-button-secondary">Digipass</label>
    <input type="radio" id="sdv-control-3" name="sdv-control">
    <label for="sdv-control-3" class="sdv-button sdv-button-secondary">Bank ID on file</label>
  </div>
```

## Three segments using checkboxes
```html
  <div class="sdv-segmented-control">
    <input type="checkbox" id="sdv-control-1" name="sdv-control">
    <label for="sdv-control-1" class="sdv-button sdv-button-secondary">Mobile Bank ID</label>
    <input type="checkbox" id="sdv-control-2" name="sdv-control">
    <label for="sdv-control-2" class="sdv-button sdv-button-secondary">Digipass</label>
    <input type="checkbox" id="sdv-control-3" name="sdv-control">
    <label for="sdv-control-3" class="sdv-button sdv-button-secondary">Bank ID on file</label>
  </div>
```

## Three segments using div and aria-select
```html
  <div class="sdv-segmented-control">
    <div class="sdv-button sdv-button-secondary">Mobile Bank ID</div>
    <div class="sdv-button sdv-button-secondary">Digipass</div>
    <div aria-selected="true" class="sdv-button sdv-button-secondary">Bank ID on file</div>
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

## Small two button segment
```html
<div class="sdv-segmented-control">
  <button class="sdv-button sdv-button--small sdv-button-secondary">Graph</button>
  <button class="sdv-button sdv-button--small sdv-button-secondary">Diagram</button>
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
