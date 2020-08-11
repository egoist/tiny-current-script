# tiny-current-script

[![NPM version](https://badgen.net/npm/v/tiny-current-script)](https://npmjs.com/package/tiny-current-script) [![NPM downloads](https://badgen.net/npm/dm/tiny-current-script)](https://npmjs.com/package/tiny-current-script) [![CircleCI](https://badgen.net/circleci/github/egoist/tiny-current-script/master)](https://circleci.com/gh/egoist/tiny-current-script/tree/master) [![donate](https://badgen.net/badge/support%20me/donate/ff69b4)](https://github.com/sposors/egoist) [![chat](https://badgen.net/badge/chat%20on/discord/7289DA)](https://chat.egoist.sh)

A tiny ponyfill (266 bytes) for `document.currentScript` which adds support for IE 11.

## Install

```bash
yarn add tiny-current-script
```

## Usage

```js
import { getCurrentScript } from 'tiny-current-script'

const currentScript = getCurrentScript()
// null or current script element
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**tiny-current-script** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/tiny-current-script/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)
