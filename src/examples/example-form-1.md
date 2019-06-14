---
title: Example form 1
componentid: component-example-form-1
variantid: default
guid: component-example-form-1-default
---
# About this example
This is an example implementation of the form seen on [the forms page on Design Library](http://designlibrary.sebgroup.com/layout-templates/forms/#examples)

This example uses a simple CSS-grid layout for demo purposes.

:::componentpreview
## Default
```html
<div class="vanilla-example-simple-form">
    <h1>Your contact information</h1>
    <main>
        <p class="sdv-preamble">In no impression assistance contrasted. Manners she wishing justice hastily new anxious.
            At discovery discourse departure objection we. Few extensive add delighted tolerably
            sincerity her. Law ought him least enjoy decay one quick court. Expect warmly its tended
            garden him esteem had remove off. Effects dearest staying now sixteen nor improve. </p>

        <div>
            <label class="sdv-field-label">Name</label>
            <b>Sara Wahlström</b>
        </div>
        <div>
            <label class="sdv-field-label">Adress</label>
            <b>Ibsengatan 62</b>
        </div>
        <div class="flex">
            <div class="cell-150">
                <label class="sdv-field-label">Zip code</label>
                <b>168 46</b>
            </div>
            <div class="cell-150">
                <label class="sdv-field-label">City</label>
                <b>Bromma</b>
            </div>
        </div>
        <div class="flex">
            <div class="cell-300">
                <label class="sdv-field-label">Cellphone number</label>
                <input id="input-field" class="sdv-field" aria-label="Field label" placeholder="+46" type="tel">
                <div class="sdv-field-notice">Enter your number including country code</div>
            </div>
            <div class="cell-300">
                <label class="sdv-field-label">Email adress</label>
                <input id="input-field" class="sdv-field" aria-label="Field label" placeholder="" type="email">
            </div>
        </div>
        <div class="sdv-field-checkbox-wrap">
            <input type="checkbox" aria-label="Field label" id="sdv-cb1">
            <label for="sdv-cb1" class="sdv-field-label">I've read and understood <a href="#">SEB's integrity policy</a></label>
        </div>
        <div class="flex actions">
            <div class="cell-300">
                <button class="sdv-button sdv-button-alternative">Cancel</button>
            </div>
            <div class="cell align-right">
                <button class="sdv-button">Next</button>
            </div>
        </div>
    </main>
    <aside>
        <dl class="sdv-accordion">
            <input type="checkbox" name="sdv-accordion" id="sdv-accordion-radio-1" aria-labelledby="sdv-accordion-desc-1" checked>
            <dt class="sdv-accordion__header"><label for="sdv-accordion-radio-1">Continue later?</label></dt>
            <dd id="sdv-accordion-desc-1">
                <p><b>Ut enim ad minim veniam</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p><b>Sed do eiusmod tempor</b></p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </dd>
        </dl>
    </aside>
</div>
```
:::
