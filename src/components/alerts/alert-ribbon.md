---
title: Alert ribbon
componentid: component-alertribbon
variantid: default
guid: component-alertribbon
---

# Usage
The alert ribbon component has three different severity levels: whisper, talk and shout. Talk and shout messages should be displayed with the exclamation triangle icon on its left.

There are three ways to use this component.

1. Import the classes and use them as is
2. Import the aler-ribbon mixin and apply it to your own selector
3. Import the alert-ribbon-mixins and use them in your own structure

These will be explained in the examples section, below the component preview.

### Component preview

:::componentpreview

## Whisper

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--whisper" role="alert">
    <p>Whisper: Used for informative guiding messages, sometimes proactive advice. Display color is purple.</p>
</div>
```
## Whisper with button

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--whisper" role="alert">
    <p>Visste du att du kan lämna in din deklaration via din internetbank?</p>
    <button class="sdv-alert-ribbon__button">Visa hur</button>
</div>
```

## Talk

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--talk" role="alert">
    <i class="fal fa-exclamation-triangle sdv-icon-left"></i>
    <p>Talk: A gentle warning, that you may disregard, but it may influence the experience.. Display colour is yellow.</p>
</div>
```

## Talk with button

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--talk" role="alert">
    <i class="fal fa-exclamation-triangle sdv-icon-left"></i>
    <p>Eftersom vi inte har kontaktuppgifter till dig kan vi inte meddela dig när ordern är behandlad. Uppdatera gärna dina kontaktuppgifter.</p>
    <button class="sdv-alert-ribbon__button">Uppdatera</button>
</div>
```
## Shout

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--shout" role="alert">
    <i class="fal fa-exclamation-triangle sdv-icon-left"></i>
    <p>Shout: A critical warning that you may not disregard, you will probably not be able to use the function. Display colour is red.</p>
</div>
```

## Shout with button

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--shout" role="alert">
    <i class="fal fa-exclamation-triangle sdv-icon-left"></i>
    <p>Just nu går det inte att logga in med BankID på grund av ett driftsproblem hos Finansiell ID-teknik. Detta drabbar alla svenska banker som använder BankID.</p>
    <button class="sdv-alert-ribbon__button">Logga in utan BankID</button>
</div>
```
:::

### Examples

1 - Import classes:

```scss
@import "~@sebgroup/vanilla/src/components/alerts/alert-ribbon";
````

Use them in your template:

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--talk" role="alert">
  <i class="fal fa-exclamation-triangle sdv-icon-left"></i>
  <p>Eftersom vi inte har kontaktuppgifter till dig kan vi inte meddela dig när ordern är behandlad. Uppdatera gärna dina kontaktuppgifter.</p>
  <button class="sdv-alert-ribbon__button">Uppdatera</button>
</div>
```

The `<i>` and the `<button>` elements are optional. (the icon is never used on whisper alerts)


---

2 - Use the alert-ribbon mixin:

```scss
@import '~@sebgroup/vanilla/src/components/alerts/alert-ribbon-mixins';

.my-alert-class {
  @include vanilla-alert-ribbon();
}
```

```html
<div class="my-alert-class">...</div>
```

---

3 - Use the alert mixins directly in your own structure:

```scss
@import "~@sebgroup/vanilla/src/components/alerts/alert-ribbon-mixins";

.my-alert {
    @include vanilla-alert-ribbon-base();

    .my-paragraph {
        @include vanilla-alert-ribbon__paragraph();
    }

    .my-whisper-style-class {
        @include vanilla-alert--whisper();
    }

    .my-talk-style-class {
    ...
}
```

Please refer to the source code on [Github](https://github.com/sebgroup/vanilla-pattern-library/blob/master/src/components/alerts/_alert-ribbon-mixins.scss) for a full example of how to use the mixins. (see vanilla-alert-ribbon)

---


