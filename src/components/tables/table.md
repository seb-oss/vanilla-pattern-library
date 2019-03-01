---
title: Table
componentid: component-table
variantid: default
guid: component-table-default
private: false
---
# Usage
Import classes:
```scss
@import "~@sebgroup/vanilla/src/components/tables/table";
```

:::componentpreview
## Table with footer and checkboxes
```html
<table class="sdv-table">
    <thead>
        <tr>
            <th>
                <div class="sdv-field-checkbox-wrap">
                    <input type="checkbox" aria-label="Field label" id="sdv-cb1">
                    <label for="sdv-cb1"></label>
                </div>
            </th>
            <th class="sdv-table__primary-col sdv-table__sortable-col sdv-table__sortable-col--asc">
                Name
            </th>
            <th class="sdv-table__sortable-col">
                Ccy
            </th>
            <th class="sdv-table__numeric-col sdv-table__sortable-col">
                Booked balance
            </th>
            <th class="sdv-table__numeric-col sdv-table__sortable-col">
                Value dated balance
            </th>
            <th class="sdv-table__numeric-col sdv-table__sortable-col">
                Limit
            </th>
            <th class="sdv-table__numeric-col sdv-table__sortable-col">
                Unauthorised usage
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="sdv-field-checkbox-wrap">
                    <input type="checkbox" aria-label="Field label" id="sdv-cb2">
                    <label for="sdv-cb2"></label>
                </div>
            </td>
            <td>
                Capitalized CPH ODFlex 160209
            </td>
            <td>
                DKK
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col">
                100.00
            </td>
            <td class="sdv-table__numeric-col">93,556.07</td>
        </tr>
        <tr>
            <td>
                <div class="sdv-field-checkbox-wrap">
                    <input type="checkbox" aria-label="Field label" id="sdv-cb3">
                    <label for="sdv-cb3"></label>
                </div>
            </td>
            <td>
                Capitalized CPH ODFlex 160209
            </td>
            <td>
                DKK
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col">
                100.00
            </td>
            <td class="sdv-table__numeric-col">93,556.07</td>
        </tr>
        <tr>
            <td>
                <div class="sdv-field-checkbox-wrap">
                    <input type="checkbox" aria-label="Field label" id="sdv-cb4">
                    <label for="sdv-cb4"></label>
                </div>
            </td>
            <td>
                Capitalized CPH ODFlex 160209
            </td>
            <td>
                DKK
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col">
                100.00
            </td>
            <td class="sdv-table__numeric-col">93,556.07</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td></td>
            <td>Totalt</td>
            <td></td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">-333,464.13</td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">-333,464.13</td>
            <td class="sdv-table__numeric-col">300.00</td>
            <td class="sdv-table__numeric-col">333,464.13</td>
        </tr>
    </tfoot>
</table>
```

## Table with fixed left column
```html
<!-- NOTE: This style uses position: sticky, which hasmlimitations in some browsers. See https://caniuse.com/#search=sticky for more information -->
<table class="sdv-table sdv-table--fixed-l-col">
    <thead>
        <tr>
            <th class="sdv-table__primary-col sdv-table__sortable-col sdv-table__sortable-col--asc">
                Name
            </th>
            <th class="sdv-table__sortable-col">
                Ccy
            </th>
            <th class="sdv-table__numeric-col sdv-table__sortable-col">
                Booked balance
            </th>
            <th class="sdv-table__numeric-col sdv-table__sortable-col">
                Value dated balance
            </th>
            <th class="sdv-table__numeric-col sdv-table__sortable-col">
                Limit
            </th>
            <th class="sdv-table__numeric-col sdv-table__sortable-col">
                Unauthorised usage
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Capitalized CPH ODFlex 160209
            </td>
            <td>
                DKK
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col">
                100.00
            </td>
            <td class="sdv-table__numeric-col">93,556.07</td>
        </tr>
        <tr>
            <td>
                Capitalized CPH ODFlex 160209
            </td>
            <td>
                DKK
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col">
                100.00
            </td>
            <td class="sdv-table__numeric-col">93,556.07</td>
        </tr>
        <tr>
            <td>
                Capitalized CPH ODFlex 160209
            </td>
            <td>
                DKK
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">
                -93,656.07
            </td>
            <td class="sdv-table__numeric-col">
                100.00
            </td>
            <td class="sdv-table__numeric-col">93,556.07</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Totalt</td>
            <td></td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">-333,464.13</td>
            <td class="sdv-table__numeric-col sdv-table__negative-col">-333,464.13</td>
            <td class="sdv-table__numeric-col">300.00</td>
            <td class="sdv-table__numeric-col">333,464.13</td>
        </tr>
    </tfoot>
</table>
```

## Simple table
```html
<table class="sdv-table">
    <thead>
        <tr>
            <th class="pw-table__primary-col">id</td>
            <th>Name</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>Rock</td>
            <td>2018-12-03</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Paper</td>
            <td>2018-06-13</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Scissors</td>
            <td>2018-06-13</td>
        </tr>
    </tbody>
</table>
```

## Super simple table
```html
<table class="sdv-table">
    <tr>
        <td class="pw-table__primary-col">id</td>
        <td>Name</td>
        <td>Date</td>
    <tr>
        <td>0</td>
        <td>Rock</td>
        <td>2018-12-03</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Paper</td>
        <td>2018-06-13</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Scissors</td>
        <td>2018-06-13</td>
    </tr>
</table>
```

:::
