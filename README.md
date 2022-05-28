# Angular and module: Node16

This repo shows the behaviour of `@angular/compiler` version 14.0.0-rc.2 with typescript 4.7's `"module": "node16"`.
The repo uses `ng-packagr`, but the behaviour has also been reproduced with other angular library pipeline(s).

The repo has three branches:

- `main` shows the output without `node16`
- `nomodule` shows the output with `node16` without `"type": "module"` in the `package.json` ergo using `.mts` files in the `src/` folder
- `module` shows the output with `node16` with `"type": "module"` in the `package.json` using `.ts` files in the `src/` folder

Run `yarn && yarn build` to test the build, the build output is checked in when succesful.
