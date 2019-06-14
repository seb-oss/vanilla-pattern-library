---
title: Example form 2
componentid: component-example-form-2
variantid: default
guid: component-example-form-2-default
---
# About this example
This is an example implementation of the form seen on [the forms page on Design Library](http://designlibrary.sebgroup.com/layout-templates/forms/#examples)

This example uses a simple CSS-grid layout for demo purposes.

:::componentpreview
## Default
```html
<div class="vanilla-example-simple-form">
    <h1>Betala och överföra</h1>
    <main>
        <p class="sdv-preamble">In no impression assistance contrasted. Manners she wishing justice hastily new anxious.
            At discovery discourse departure objection we. Few extensive add delighted tolerably
            sincerity her. Law ought him least enjoy decay one quick court. Expect warmly its tended
            garden him esteem had remove off. Effects dearest staying now sixteen nor improve. </p>
        <h4>Ny betalning eller överföring
        </h4>
        
        <div>
            <label class="sdv-field-label">Jag vill göra en</label>
            <button class="sdv-button sdv-button-primary">Betalning</button>
            <button class="sdv-button sdv-button-secondary">Överföring</button>
        </div>
        <div class="flex">
            <div class="cell-300">
                <label class="sdv-field-label">Till</label>
                <label class="sdv-field-label">Mottagare</label>
                <input id="input-field" class="sdv-field" aria-label="Field label" placeholder="Fyll i mottagare eller välj från listan" type="text">    
            </div>
        </div>
        <div class="flex">
            <div class="cell-150">
                <label class="sdv-field-label">Belopp</label>
                <input id="input-field" class="sdv-field" aria-label="Field label" placeholder="Fyll i belopp" type="number">
            </div>
        </div>
        <!--  -->
        <div class="flex">
            <div class="cell-150">
                <label class="sdv-field-label">Betalningsdatum</label>
            </div> 
        </div>
        <div class="flex">
            <div class="sdv-datepicker">
                <div class="sdv-datepicker__controls">
                    <button class="sdv-button sdv-button-alternative sdv-button--small"><i class="fal fa-chevron-left"></i></button>
                    <div class="sdv-field-dropdown sdv-field--small">
                        <div class="sdv-field-dropdown__label" tabindex="0">April</div>
                        <div class="sdv-field-dropdown__options">
                            <!-- Month values goes here -->
                        </div>
                    </div>
                    <div class="sdv-field-dropdown sdv-field--small">
                        <div class="sdv-field-dropdown__label" tabindex="0">2019</div>
                        <div class="sdv-field-dropdown__options">
                            <!-- Year values goes here -->
                        </div>
                    </div>
                    <button class="sdv-button sdv-button-alternative sdv-button--small"><i class="fal fa-chevron-right"></i></button>
                </div>
                <div class="sdv-datepicker__calendar-row sdv-small">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
                <div class="sdv-datepicker__calendar">
                    <div class="sdv-datepicker__calendar-row">
                        <button class="sdv-button sdv-button-alternative" disabled>30</button>
                        <button class="sdv-button sdv-button-alternative" disabled>31</button>
                        <button class="sdv-button sdv-button-alternative">1</button>
                        <button class="sdv-button sdv-button-alternative">2</button>
                        <button class="sdv-button sdv-button-alternative">3</button>
                        <button class="sdv-button sdv-button-alternative">4</button>
                        <button class="sdv-button sdv-button-alternative">5</button>
                    </div>
                    <div class="sdv-datepicker__calendar-row">
                        <button class="sdv-button sdv-button-alternative">6</button>
                        <button class="sdv-button sdv-button-alternative">7</button>
                        <button class="sdv-button sdv-button-alternative">8</button>
                        <button class="sdv-button sdv-button-alternative">9</button>
                        <button class="sdv-button sdv-button-alternative">10</button>
                        <button class="sdv-button sdv-button-alternative">11</button>
                        <button class="sdv-button sdv-button-alternative">12</button>
                    </div>
                    <div class="sdv-datepicker__calendar-row">
                        <button class="sdv-button sdv-button-alternative">13</button>
                        <button class="sdv-button sdv-button-alternative">14</button>
                        <button class="sdv-button sdv-button-alternative">15</button>
                        <button class="sdv-button sdv-button-alternative">16</button>
                        <button class="sdv-button sdv-button-alternative">17</button>
                        <button class="sdv-button sdv-button-alternative">18</button>
                        <button class="sdv-button sdv-button-alternative">19</button>
                    </div>
                    <div class="sdv-datepicker__calendar-row">
                        <button class="sdv-button sdv-button-alternative">20</button>
                        <button class="sdv-button sdv-button-alternative">21</button>
                        <button class="sdv-button sdv-button-alternative">22</button>
                        <button class="sdv-button sdv-button-alternative">23</button>
                        <button class="sdv-button sdv-button-alternative">24</button>
                        <button class="sdv-button sdv-button-alternative">25</button>
                        <button class="sdv-button sdv-button-alternative">26</button>
                    </div>
                    <div class="sdv-datepicker__calendar-row">
                        <button class="sdv-button sdv-button-alternative">27</button>
                        <button class="sdv-button sdv-button-alternative">28</button>
                        <button class="sdv-button sdv-button-alternative">29</button>
                        <button class="sdv-button sdv-button-alternative">30</button>
                        <button class="sdv-button sdv-button-alternative" disabled>1</button>
                        <button class="sdv-button sdv-button-alternative" disabled>2</button>
                        <button class="sdv-button sdv-button-alternative" disabled>3</button>
                    </div>
                </div>
            </div>
        </div>


        <!--  -->

        <div class="flex">
            <div class="cell">
                <label class="sdv-field-label">OCR-nummer</label>
            </div>
        </div>
        <div class="flex">
            <div class="cell-300">
                <input id="input-field" class="sdv-field" aria-label="Field label" placeholder="Endast siffror" type="number">
            </div>
            <div class="cell-300">
                <button class="sdv-button sdv-button-alternative">Inget OCR-nummer?</button>    
            </div>
        </div>
        <div class="flex">
            <div class="cell">
                <p>OCR-numret hittar du längst ner i inbetalningskortet</p>
            </div>
        </div>



        <div class="flex">
            <div class="cell">
                <label class="sdv-field-label">Från</label>
                <label class="sdv-field-label">Valt konto</label>
            </div>
        </div>
        <div class="flex">
            <div class="cell">
                <input id="input-field" class="sdv-field" aria-label="Field label" placeholder="Privatkonto med bankkort VISA" type="number">    
            </div>
            <div class="cell">
                <button class="sdv-button sdv-button-alternative">Ändra förvalt konto?</button> 
            </div>
        </div>
        <div class="flex">
            <div class="cell">
                <label class="sdv-field-label">Egen anteckning (valfritt)</label>
            </div>
        </div>  
        <div class="flex">
            <div class="cell">
                <input id="input-field" class="sdv-field" aria-label="Field label" placeholder="Privatkonto med bankkort VISA" type="number">    
            </div>
        </div>

        <div class="flex">
            <div class="cell-300">
                <label for="input-field" class="sdv-field-label">Field label</label>
                <textarea id="input-field" class="sdv-field" aria-label="Field label" placeholder="Input field"></textarea>
            </div>
        </div>

        <div class="flex actions">
            <div class="cell">
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
