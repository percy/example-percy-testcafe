# Advanced Percy + TestCafe

Exercises the full applicable Percy SDK feature surface for `@percy/testcafe`. 10 testcafe tests covering widths, percyCSS, minHeight, enableJavaScript, responsiveSnapshotCapture, labels, testCase, devicePixelRatio, browsers override, readiness preset.

## Run locally

```bash
cd advanced
npm install
export PERCY_TOKEN="<your project token>"
npm run test:advanced
```

CI assertion mode:

```bash
npm run test:advanced:ci
```

Source of truth: [`matrix.yml`](./matrix.yml).
