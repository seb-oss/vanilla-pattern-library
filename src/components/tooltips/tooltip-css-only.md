---
title: Simple CSS-only tooltip
componentid: component-tooltip
variantid: css-tooltip
guid: component-tooltip-css-tooltip
---

# Usage

Import classes:

```scss
@import 'vanilla/components/tooltips/tooltip-css-only';
```

This is a version of the tooltip that can be used without any JS implementation.
It is limited to the "top" variant and has a fixed width.

In a SCSS build, the width can be configured by setting the variable `$vanilla-tooltip-css-only--width` to the value of your choosing.

**\*Note:** This variant of the tooltip may display partially outside of the screen. Avoid using it in a situation where it may be displayed close to screen edges.\*

:::componentpreview

## Simple CSS-only tooltip

```html
<div>
  <p>
    <span
      tabindex="0"
      class="sdv-tooltip-css"
      data-sdv-tooltip="This is a tooltip"
      >Mouse</span
    >
    over me for a tooltip!
  </p>
  <p>
    Or put the mouse
    <span
      tabindex="0"
      class="sdv-tooltip-css"
      data-sdv-tooltip="This is a tooltip with longer text. Width is still the same, but height adjusts to content."
      >here</span
    >
    for another one.
  </p>
  <p>
    It can also be used with icons
    <span
      tabindex="0"
      class="sdv-tooltip-css"
      data-sdv-tooltip="This here is an info icon"
      ><i class="fal fa-info-circle"></i
    ></span>
  </p>
</div>
```

:::
