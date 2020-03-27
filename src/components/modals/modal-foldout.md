---
title: Fold-out
componentid: component-foldout
variantid: default
guid: component-foldout-default
---

# Usage
This is an example of using a dropdown with a custom button as a fold-out modal

### Component preview

:::componentpreview

## Base state

## Base state

```html
<div class="sdv-field-dropdown">
  <button class="sdv-button sdv-button-alternative"><i class="far fa-ellipsis-h"></i>
  <div class="sdv-field-dropdown__options">
    <input type="radio" id="sdv-dropdown1-1" name="sdv-dropdown-1" />
    <label for="sdv-dropdown1-1">Dropdown value 1</label>
    <input type="radio" id="sdv-dropdown1-2" name="sdv-dropdown-1" />
    <label for="sdv-dropdown1-2">Dropdown value 2</label>
    <input type="radio" id="sdv-dropdown1-3" name="sdv-dropdown-1" />
    <label for="sdv-dropdown1-3">Dropdown value 3</label>
    <input type="radio" id="sdv-dropdown1-4" name="sdv-dropdown-1" />
    <label for="sdv-dropdown1-4">Dropdown value 4</label>
  </div>
</div>
```

## Expanded state

```html
<div class="sdv-field-dropdown">
  <button class="sdv-button sdv-button-primary"><i class="far fa-ellipsis-h"></i></button>
  <div class="sdv-field-dropdown__options -expanded">
    <input type="radio" id="sdv-dropdown1-1" name="sdv-dropdown-1" />
    <label for="sdv-dropdown1-1">Dropdown value 1</label>
    <input type="radio" id="sdv-dropdown1-2" name="sdv-dropdown-1" />
    <label for="sdv-dropdown1-2">Dropdown value 2</label>
    <input type="radio" id="sdv-dropdown1-3" name="sdv-dropdown-1" />
    <label for="sdv-dropdown1-3">Dropdown value 3</label>
    <input type="radio" id="sdv-dropdown1-4" name="sdv-dropdown-1" />
    <label for="sdv-dropdown1-4">Dropdown value 4</label>
  </div>
</div>
```
