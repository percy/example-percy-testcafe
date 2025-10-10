Changes performed during PER_5831

Summary
-------

- Updated devDependencies to newest versions available at time of change.
- Ran TestCafe tests wrapped with Percy and validated two builds (Build 1 and Build 2).
- Updated `README.md` to include a Dependencies section showing the new versions.

Dependency updates
------------------

- @babel/core: 7.28.4
- @babel/preset-env: 7.28.3
- @percy/cli: 1.31.3
- http-server: 14.1.1
- todomvc-app-css: 2.4.3

Files changed
-------------

- `package.json` - bumped devDependencies to latest versions.
- `package-lock.json` - updated by npm install.
- `README.md` - added Dependencies section.
- `DESCRIPTION.md` - this file.

Percy Build Links
-----------------

- Build 1 (before updates): https://percy.io/9560f98d/web/test-pranav-8a4f5725/builds/43775673
- Build 2 (before updates, port in use): CLI logs showed Percy disabled for second run.
- Build 1 (after updates): https://percy.io/9560f98d/web/test-pranav-8a4f5725/builds/43775927
- Build 2 (after updates): https://percy.io/9560f98d/web/test-pranav-8a4f5725/builds/43775946

Steps followed
------------

1. Read `README.md` to determine how to run tests and Percy builds.
2. Ran `npm install` to install current dependencies.
3. Created new branch `PER_5831`.
4. Ran tests with Percy (used `web-t` to export `PERCY_TOKEN`) to generate initial builds.
5. Ran `npm outdated` and updated `package.json` devDependencies to latest versions.
6. Ran `npm install` to apply updated versions and updated `package-lock.json`.
7. Re-ran tests with Percy to validate snapshots and builds.
8. Updated `README.md` to reflect the dependency version changes.
9. Committed changes on branch `PER_5831`.

Notes and troubleshooting
------------------------

- A transient Percy error occurred on one run due to the Percy CLI port (5338) already in use; retrying produced successful builds.
- Tests remained compatible; no test code changes were required.
