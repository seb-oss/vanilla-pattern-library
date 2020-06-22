---
title: Drag and drop (file list)
componentid: component-drag-drop
variantid: list
guid: component-drag-drop-list
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/drag-drop/drag-drop';
```

:::componentpreview

## Base state

```html
<div class="sdv-drag-drop">
  <input class="sdv-drag-drop__input" id="drag-drop" type="file" multiple />
  <label class="sdv-drag-drop__label" for="drag-drop">
    <i class="far fa-cloud-upload sdv-icon-left"></i><em>Choose a file</em> or drag it here
  </label>

  <table class="sdv-table">
    <caption>Uploaded files:</caption>
    <thead>
      <tr>
        <th>
          <div class="sdv-field-checkbox-wrap">
            <input type="checkbox" aria-label="Field label" id="sdv-cb1">
            <label for="sdv-cb1"></label>
          </div>
        </th>
        <th class="sdv-table__primary-col sdv-table__sortable-col sdv-table__sortable-col--asc">
          Name
        </th>
        <th class="sdv-table__sortable-col">
          Type
        </th>
        <th class="sdv-table__sortable-col">
          Size
        </th>
        <th class="sdv-table__numeric-col">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="sdv-field-checkbox-wrap">
            <input type="checkbox" aria-label="Field label" id="sdv-cb2">
            <label for="sdv-cb2"></label>
          </div>
        </td>
        <td class="sdv-table__primary-col">
          B542CCB2.PNG
        </td>
        <td>
          Image
        </td>
        <td>
          512 kB
        </td>
        <td class="sdv-table__numeric-col">
          <a href=""><i class="far fa-times"></i></a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

:::
