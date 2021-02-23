---
title: Slider
componentid: component-slider
variantid: default
guid: component-slider-default
private: false
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/sliders/range-input";
```

This will output the classes used in the example below, and is meant to be used with the native range input element. It should work OK in most browsers, but there are a few minor inconsistencies due to the different way this is implemented in the browsers.

Much of the CSS for this component is borrowed from [this article](https://css-tricks.com/sliding-nightmare-understanding-range-input/) on CSS-tricks. Go read it if you want to learn more about the range input.

You can also make a custom slider by using mixins. More on that below the example.

:::componentpreview
## Base state
```html
<div style="width: 100%">
  <div class="sdv-slider-label">
    <label>Slider label text in one line</label>
    <input id="input-field" class="sdv-field sdv-field--small" aria-label="Field label" placeholder="Input field" />
  </div>
  <input type="range" class="sdv-range-input">
  <div class="sdv-small">Info text can be quite long quite long quite long</div>
</div>
```
:::

### Mixins
If you want to make a custom JavaScript powered slider you can use mixins:
```scss
@import "~@sebgroup/vanilla/src/components/sliders/slider-mixins";
```
All individual elements in the slider can be applied to your own selectors by using the mixins.

The slider has two main components: The track and the thumb.
The track is the gray line along which the slider can be dragged, and the thumb is the blue control that the user can click and drag. There is a mixin for each of these componenets: `vanilla-slider-thumb()`and `vanilla-slider-track()`
