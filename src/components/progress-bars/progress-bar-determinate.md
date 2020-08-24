---
title: Progress bar (determinate)
componentid: component-progressbar
variantid: default
guid: component-progressbar-determinate
private: false
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/progress-bars/progress-bar";
```

Must have a value attribute set for `<progress>` to be determinate, else use a `<div>` without value attribute for indeterminate.

:::componentpreview
## Base state
```html
<progress class="sdv-progress-bar" max="100" value="70"> 70% </progress>
```
:::
