<p align="center">
  <img alt="babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" width="300">
  <h1 style='display:inline-block'>ESLint</h1>
  <img src="https://cldup.com/xFVFxOioAU.svg" alt="Mocha test framework" width="300"/>
</p>

# js-boilerplate
## Objective
To create a simple boilerplate for quickly getting up and running with a modern, es6, es7-experimental project.

## Includes the following:
- `.eslintrc.json` configured to use airbnb standard and compatible with mocha.
- `package.json` -- with scripts using all dev-dependencies installed locally.
- `npm` scripts:
-- `lint` - Lints the `src/` directory.
-- `fix` - Fixes the `src/` directory via eslint --fix.
-- `build` - Uses babel to transpile `src/` to `build/` directory.
-- `watch` - Runs the build script anytime a file in src/ is changed.
-- `test` - Runs a simple mocha test on the `build/test.js` file.
-- `start` - Runs `build/index.js` using node.js

## Getting started
- Clone the repo.
- run `npm i`
- In one terminal, start the watch script `npm run watch`
- In another, start coding your project in the src/ directory.
- Enjoy!

## TODO
So far the scope of this project ignores web browsers, others, focusing mainly on server side js, for example -- in my specific use case especially -- using es modules right out of the box.

So future projects might include webpack setup(s) for browser-based projects.
