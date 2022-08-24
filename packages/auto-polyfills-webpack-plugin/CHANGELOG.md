# auto-polyfills-webpack-plugin

## 1.0.1

### Patch Changes

- 403d780e: release auto-polyfills-webpack-plugin, and support it in ko

  1. release auto-polyfills-webpack-plugin, find more in it's README
  2. add auto-polyfills-webpack-plugin & dynamic-resolve-webpack-plugin into ko, and support change these plugins via config options:

  ```js
    export type IOptions = {
      dynamicResolve?: <T extends any>(request: T) => T;
      autoPolyfills: boolean | AutoPolyfillsWebpackPluginOptions;
    }
  ```