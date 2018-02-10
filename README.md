# minimal-repo-ts-jest-line-number-bug

```bash
npm install
npm test
```

Run the test. The test should fail **but** it should show the correct line number (19). But the line number of the JS file is shown (16).

If you comment the `beforeEach` and `afterEach` block of the `Dog.spec.ts` test, the line numbers should be shown correctly.

The problem is related with importing libraries with default export (such as `mock-js`).