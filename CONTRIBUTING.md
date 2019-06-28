# Contributing to Vanilla

## Prerequisits

In order to work with Vanilla Pattern library you need to have a few pieces of software installed on your machine:

* node
* npm
* commitizen (optional, but helpful)

### Node.js
It is recommended to install node via `nvm` (node version manager). With `nvm` you can easily switch between multiple node versions.
If you're on Windows, you can use [nvm for Windows](https://github.com/coreybutler/nvm-windows/releases). If you're on Mac, you can easily install `nvm` via [Homebrew package manager](https://brew.sh/)

### Commitizen
[Commitizen](https://github.com/commitizen/cz-cli) is a CLI tool that will help you write proper commit messages for Semantic Release (more on that further down in this document)

### Code editor
Of course, you will also need a code editor. We use [Visual Studio Code](https://code.visualstudio.com/), and there's some config included for that editor. But you can of course use what ever you want.

## Project structure

Read about Vanilla Pattern Library code organisation here: https://github.com/sebgroup/vanilla-pattern-library/wiki/Code-organisation

### Prettier
We use [prettier](https://prettier.io/) to keep the source code neat and tidy, and to eliminate the element of personal preference. Prettier is run in a pre-commit hook, and will process any staged files before they are committed. It is reccomended to configure your code editor to also run prettier on every save. That way, there will be no surprises when committing code.

### Stylelint
In addition to prettier, we also run [Stylelint](https://stylelint.io/) to enforce certain conventions. We've set it up so that stylelint won't care about formatting (that's Prettier's job) and only look at things that affect the meaning of the code, such as use of units, rule order, and so on.


## How to contribute to Vanilla

### Feature branches and conventional changelog

This section assumes you have already cloned the repository locally to your comuter, or forked and cloned if you lack push privliligies to SEB Group repositories.

The first thing you should do before committing anything is to create a new branch. We like to name the branches according to what type of change they will hold. For example, a branch containing a fix that is intended to end up in a new patch release would be named `fix/my-fix-branch`. Use you git client of choice, or stick with command line:
```bash
$ git checkout -b fix/my-fix-branch
```

Before commiting, it is a good idea to run `npm run lint`, and check if there's anything you need to fix. This will also run as a pre-commit hook, but it's nice to have it fixed before that.

When committing, you need to write a commit message that's compatible with the conventional changelog format. You can read more about that [here](https://github.com/semantic-release/semantic-release).

This is where [Commitizen](https://github.com/commitizen/cz-cli) comes in handy. Commitizen will present you with a little command line wizard that will walk you through the process of composing a suitable commit message. It is very helpful when getting started with this convention.

Start by installing Commitizen globally:
```bash
$ npm i -g commitizen
```

Now commit your staged changes like this:
```bash
$ git cz
```

After you finish the guide, git will run pre-commit hooks which will lint both the code and the commit message, and also run prettier. If any of the linting fail, your commit will get rejected and you need to fix what went wrong and try again.

### Tests

#### Running the test suite
Before push your code to GitHub, it is a good idea to run the test suite. We're using [True](https://github.com/oddbird/true) to run unit tests for the Sass code in Vanilla. What we're testing is that all of the mixins are able to run without errors. These test doesn't care about the output at all. Run the the True test suite like this: ```npm run test```

#### Updating and creating tests
We've set up a script to automate the process of creating tests. It will look at all of the .scss files in the project and create a test for every mixin it finds in those files. Since we're only testing that the mixins run without errors, this is fully sufficient and simplifies the task of keeping the test suite up to date.

### Merge via pull request

Now you should be all set to push your branch to the remote repo in GitHub:
```bash
$ git push origin fix/my-fix-branch
```

Then open go to [Pull requests](https://github.com/sebgroup/vanilla-pattern-library/pulls) for the Vanilla repo and create a pull request from your newly pushed branch to `master`. A build will get triggered in Travis, and if it comes through green your pull request is ready for review.

The pull request needs at least 1 approving review before it can be merged to master. When your pull request is approved, it is likely that the approver will also merge it for you. Otherwise you can simply go ahead and merge it yourself. The merge button should turn green after an approval has been made. Remember to delete the branch after the merge is done.

### Semantic release

When something is merged to `master`, a new build will get triggered in Travis. And since it is from the `master` branch, Semantic Release will run as well. Semantic Release will analyze all new commits since the last release and if it finds any commit messages starting with `fix:` or `feat:`, or if it finds the text `BREAKING CHANGE:`, a new release will be made.

The information in the commit messages will be used to determine the new version number used for the release. You can read more about how this works [here](https://github.com/semantic-release/semantic-release).

A new release entry will also get generated and added to the changelog [here](https://github.com/sebgroup/vanilla-pattern-library/releases).

When a build is triggered from `master`, it will also deploy that build to GitHub pages, which will cause the [demo site](https://sebgroup.github.io/vanilla-pattern-library/) to get updated.

## That's it! :tada:
Congratulations and thanks for contributing to Vanilla!
