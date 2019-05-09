---
title: Datepicker (extended)
componentid: component-datepicker
variantid: extended
guid: component-datepicker-extended
---

# Usage

Import classes:

```scss
@import '~@sebgroup/vanilla/src/components/datepicker/datepicker';
```

:::componentpreview

## Base state

```html
<div class="sdv-datepicker">
  <div class="sdv-datepicker__controls">
    <button class="sdv-button sdv-button-alternative sdv-button--small">
      <i class="fal fa-chevron-left"></i>
    </button>
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
    <button class="sdv-button sdv-button-alternative sdv-button--small">
      <i class="fal fa-chevron-right"></i>
    </button>
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
  <div class="sdv-datepicker__controls">
    <button class="sdv-button sdv-button-alternative sdv-button--small">
      Today
    </button>
    <button class="sdv-button sdv-button-alternative sdv-button--small">
      Other action
    </button>
  </div>
</div>
```

:::
