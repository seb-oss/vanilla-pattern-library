# Vanilla Pattern Library

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.com/sebgroup/vanilla-pattern-library.svg?branch=dev)](https://travis-ci.com/sebgroup/vanilla-pattern-library)
[![Stable Version](https://img.shields.io/npm/v/@sebgroup/vanilla/latest.svg)](https://www.npmjs.com/package/@sebgroup/vanilla) [![Greenkeeper badge](https://badges.greenkeeper.io/sebgroup/vanilla-pattern-library.svg)](https://greenkeeper.io/)

Vanilla contains basic HTML-only versions of SEB's web components.

The CSS-classes in this library are all prefixed with sdv (short for SEB Design library Vanilla), while variables, functions, mixins, etc are prefixed with vanilla.

This library can be used in two different ways:
1. **Import the classes and use directly in your markup.** This can be done either by importing SCSS-files, or by simply including pre-built CSS-files directly in your page. When using SCSS-imports, you gain the ability to choose which components you want to include.

2. **Create your own classes using the mixins provided by this library.** To do this, you need to import _functions.scss, _variables.scss and _mixins.scss. None of these files produce any CSS-output. Instead they provide a set of mixnis and functions that can be used to create vanilla components from your own classes.

### Including classes from SCSS
For example, this will include all classes related to buttons:
```scss
@import "~@sebgroup/vanilla/src/components/buttons/button";
```

### Creating your own classes using mixins
Here's an example where we create our own button class:
```scss
@import "~@sebgroup/vanilla/src/components/buttons/button-mixins";

.my-btn-class {
    @include vanilla-button();
}
```
This will output the classes <i>.my-btn-class</i>.

### Icons
Font Awesome icons are not included and imported by default. instead you have to add this to your build yourself. You should you the Font Awesome Light set of icons.

The package you should install for icons is @fortawesome/fontawesome-pro

Components that use icons will look bad if you don't have any icons included in your build.

### Tests
There are both units test of the sass code as well as end-to-end test included in this project

#### Unit tests
Unit tests are run with mocha through sass true. The tests are generated automatically for all mixins with a script. So, when you have added a new component run `node generate-tests.js` to add unit tests for the new component. These tests only test that each mixin return what is expected but this is enough to discover most of the errors that the linter won't catch.

#### End to end tests
