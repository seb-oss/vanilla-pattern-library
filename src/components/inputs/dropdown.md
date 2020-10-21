---
title: Dropdown
componentid: component-dropdown
variantid: dropdown
guid: component-dropdown-dropdown
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/inputs/dropdown';
```

This is just a style example, functional implementation will have to be handled by the developer.

In addition to the classes shown in the example below, this component can be used via the following mixins:

```scss
@import '~@sebgroup/vanilla/src/components/inputs/input-mixins';

.my-field-dropdown__label {
  @include vanilla-field-dropdown-button();
}
.my-field-dropdown__options {
  @include vanilla-field-dropdown-options();
}
```

:::componentpreview

## Base state

```html
<div class="sdv-field-dropdown">
  <div class="sdv-field-dropdown__label" tabindex="0">Chosen value</div>
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
  <div class="sdv-field-dropdown__label" tabindex="0">Chosen value</div>
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

## Small version

```html
<div class="sdv-field-dropdown sdv-field--small">
  <div class="sdv-field-dropdown__label" tabindex="0">Chosen value</div>
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

## Native select dropdown

```html
<select class="sdv-field-dropdown-native">
  <option>Dropdown value 1</option>
  <option>Dropdown value 2</option>
  <option>Dropdown value 3</option>
  <option>Dropdown value 4</option>
</select>
```

## Using button instead of label and input

```html
<div class="sdv-field-dropdown">
  <div class="sdv-field-dropdown__label" tabindex="0">Chosen value</div>
  <div class="sdv-field-dropdown__options -expanded">
    <button>Dropdown value 1</button>
    <button class="-selected">Short one</button>
    <button>Dropdown value 3</button>
    <button>Dropdown value 4</button>
  </div>
</div>
```

:::
