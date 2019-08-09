---
title: Alert ribbon
componentid: component-alertribbon
variantid: default
guid: component-alertribbon
---

# Usage
The alert ribbon component has three different severity levels: whisper, talk and shout. Talk and shout messages should be displayed with the exclamation triangle icon on its left.



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
    <p>Eftersom ci inte har kontaktuppgifter till dig kan vi inte meddela dig när orfern ör behandlad. Uppdatera gärna dina kontaktuppgifter.</p>
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
