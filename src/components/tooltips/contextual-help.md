---
title: Contextual Help Button
componentid: component-contextual-help
variantid: default
guid: component-contextual-help-default
---

# Usage

Import classes:

```scss
@import 'vanilla/components/tooltips/contextual-help';
```

:::componentpreview

## Default

```html
<div style="font-size: 1.5rem;">
  <button class="sdv-contextual-help"></button>
</div>

```

## Input

```html
<div>
  <label for="input-field" class="sdv-field-label">Field label <button class="sdv-contextual-help"></button></label>
  <input
    id="input-field"
    class="sdv-field"
    aria-label="Field label"
    placeholder="Input field"
  />

  <label for="input-field" class="sdv-field-label">Field label</label>
  <input
    id="input-field"
    class="sdv-field"
    aria-label="Field label"
    placeholder="Input field"
  />
  <button class="sdv-contextual-help"></button>
</div>
```

## Table

```html
<div style="width: 100%; max-width: 400px;">
  <table class="sdv-table">
    <tr>
      <td>Skuld <button class="sdv-contextual-help"></button></td>
      <td>1 000 000 kr</td>
    </tr>
    <tr>
      <td>Amortering 2%</td>
      <td>5 500 kr</td>
    </tr>
    <tr>
      <td>Räntekostnad <button class="sdv-contextual-help"></button></td>
      <td>2 340 kr</td>
    </tr>
  </table>
</div>
```

:::
