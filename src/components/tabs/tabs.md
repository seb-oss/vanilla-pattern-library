---
title: Tabs
componentid: component-tab
variantid: default
guid: component-tab-default
---
# Usage
Import classes:
```scss
@import "vanilla/components/tabs/tabs";
```

### About the overflow state
*(See 'With overflow' in code & detals below)*\
The overflow state shows two tabs, and a dropdown menu that displays the rest of the tabs. The dropdown uses the options element from the Dropdown component, so make sure to import those styles if you are using this state.

The overflow state shown here is not triggerd autmatically by a media query. It is assumed that the logic that activates this state is implemented separately.

:::componentpreview
## Default
```html
<div class="sdv-tabs">
  <div class="sdv-tabs__tablist">
    <button class="sdv-tabs__tab -active">
      Tab 1
    </button>
    <button class="sdv-tabs__tab">
      Tab 2
    </button>
    <button class="sdv-tabs__tab" disabled>
      Tab 3
    </button>
  </div>
  <div class="sdv-tabs__panel -active">
    <p>
      Tab 1 content
    </p>
  </div>
  <div class="sdv-tabs__panel">
    <p>
      Tab 2 content
    </p>
  </div>
  <div class="sdv-tabs__panel">
    <p>
      Tab 3 content
    </p>
  </div>
</div>
```

## With overflow
```html
<div class="sdv-tabs">
  <div class="sdv-tabs__tablist">
    <button class="sdv-tabs__tab -active">
      Active tab
    </button>
    <button class="sdv-tabs__tab sdv-tabs__foldout-button">
      Rest of tabs
    </button>
    <div class="sdv-field-dropdown__options sdv-tabs__foldout -expanded">
        <button class="sdv-tabs__tab">
            Tab 2
        </button>
        <button class="sdv-tabs__tab">
            Tab 3
        </button>
    </div>
  </div>
  <div class="sdv-tabs__panel -active">
    <p>
      Tab 1 content
    </p>
  </div>
  <div class="sdv-tabs__panel">
    <p>
      Tab 2 content
    </p>
  </div>
  <div class="sdv-tabs__panel">
    <p>
      Tab 3 content
    </p>
  </div>
</div>
```
:::
