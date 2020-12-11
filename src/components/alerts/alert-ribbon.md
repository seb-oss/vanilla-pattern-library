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
2. Import the alert-ribbon mixin and apply it to your own selector
3. Import the alert-ribbon-mixins and use them in your own structure

These will be explained in the examples section, below the component preview.

### Component preview

:::componentpreview

## Information

```html
<div class="sdv-alert-ribbon" role="alert">
    <i class="fas fa-info-square sdv-icon-left"></i>
    <p><strong>Information!</strong> Visste du att du kan lämna in din deklaration via din internetbank?</p>
    <button class="sdv-alert-ribbon__button">Visa hur</button>
</div>
```

## Success

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--success" role="alert">
    <i class="fas fa-check sdv-icon-left"></i>
    <p><strong>Success!</strong> Transaktion registrerad. Det kan ta cirka två dagar innan transaktionen syns på kontot.</p>
    <button class="sdv-alert-ribbon__button">Logga ut</button>
</div>
```

## Warning

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--warning" role="alert">
    <i class="fas fa-exclamation-square sdv-icon-left"></i>
    <p><strong>Warning!</strong> Eftersom vi inte har kontaktuppgifter till dig kan vi inte meddela dig när ordern är behandlad. Uppdatera gärna dina kontaktuppgifter.</p>
    <button class="sdv-alert-ribbon__button">Uppdatera</button>
</div>
```

## Critical

```html
<div class="sdv-alert-ribbon sdv-alert-ribbon--critical" role="alert">
    <i class="fas fa-exclamation-square sdv-icon-left"></i>
    <p><strong>Critical!</strong> Just nu går det inte att logga in med BankID på grund av ett driftsproblem hos Finansiell ID-teknik. Detta drabbar alla svenska banker som använder BankID.</p>
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
<div class="sdv-alert-ribbon sdv-alert-ribbon--warning" role="alert">
  <i class="fal fa-exclamation-square sdv-icon-left"></i>
  <p>Eftersom vi inte har kontaktuppgifter till dig kan vi inte meddela dig när ordern är behandlad. Uppdatera gärna dina kontaktuppgifter.</p>
  <button class="sdv-alert-ribbon__button">Uppdatera</button>
</div>
```

The `<i>` and the `<button>` elements are optional.


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
        @include vanilla-alert--information();
    }

    .my-talk-style-class {
    ...
}
```

Please refer to the source code on [Github](https://github.com/sebgroup/vanilla-pattern-library/blob/master/src/components/alerts/_alert-ribbon-mixins.scss) for a full example of how to use the mixins. (see vanilla-alert-ribbon)

---


