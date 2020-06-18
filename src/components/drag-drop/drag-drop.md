---
title: Drag and drop
componentid: component-drag-drop
variantid: normal
guid: component-drag-drop-normal
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/drag-drop/drag-drop';
```

View the different states under show details.

:::componentpreview

## Base state

```html
<div class="sdv-drag-drop">
  <input class="sdv-drag-drop__input" id="drag-drop" type="file" multiple />
  <label class="sdv-drag-drop__label" for="drag-drop">
    <i class="far fa-cloud-upload sdv-icon-left"></i><em>Choose a file</em> or drag it here
  </label>
</div>
```

## Above state

```html
<div class="sdv-drag-drop">
  <input class="sdv-drag-drop__input" id="drag-drop" type="file" multiple />
  <label class="sdv-drag-drop__label sdv-drag-drop__label--above" for="drag-drop">
    <i class="far fa-cloud-upload sdv-icon-left"></i>Drop!
  </label>
</div>
```

## Uploading state

```html
<div class="sdv-drag-drop">
  <input class="sdv-drag-drop__input" id="drag-drop" type="file" multiple />
  <label class="sdv-drag-drop__label" for="drag-drop" aria-busy="true">
    Uploading file <strong>B542CCB2.PNG</strong>...
    <progress class="sdv-progress-bar" max="70" value="70"> 70% </progress>
  </label>
</div>
```

## Done state

```html
<div class="sdv-drag-drop">
  <input class="sdv-drag-drop__input" id="drag-drop" type="file" multiple />
  <label class="sdv-drag-drop__label sdv-drag-drop__label--done" for="drag-drop">
    Uploaded!<i class="far fa-check sdv-icon-right"></i>
  </label>
</div>
```

:::
