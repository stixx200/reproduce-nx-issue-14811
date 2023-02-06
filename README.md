# Example repo to reproduce nx bug

## Steps to reproduce

- npx nx build is-even
- the built package.json in `dist/packages/is-even` contains a peerDependency from a dev dependency:
  ```
  "peerDependencies": {
    "jest": "28.1.1", // no need to add jest as peerDependency for is-even package
    "tslib": "2.5.0"
  }
  ```