---
title: Tooltip
componentid: component-tooltip
variantid: default
guid: component-tooltip-default
---
# Usage
Import classes:
```scss
@import "vanilla/components/tooltips/tooltip";
```

Framework needed! This contains only the styles for a tooltip. Behaviour and positioning needs to be implemented in a JS framework.

If you only need a simple tooltip positioned above the text/icon, take a look at the CSS-only variant of the tooltip. It is more limited, but does not require any Javascript to work.

:::componentpreview
## Top
```html
<div tabindex="0" class="sdv-tooltip sdv-tooltip--top">This is a tooltip</div>
```

## Bottom
```html
<div tabindex="0" class="sdv-tooltip sdv-tooltip--bottom">This is a tooltip</div>
```

## Left
```html
<div tabindex="0" class="sdv-tooltip sdv-tooltip--left">This is a tooltip</div>
```

## Right
```html
<div tabindex="0" class="sdv-tooltip sdv-tooltip--right">This is a tooltip</div>
```
:::
