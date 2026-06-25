// PER-8195 Phase 3 — testcafe advanced example.
// Each `test` exercises one row of the Advanced Feature Matrix. See
// ../matrix.yml for the canonical mapping.

import httpServer from 'http-server'
import { Selector } from 'testcafe'
import percySnapshot from '@percy/testcafe'

const PORT = process.env.PORT_NUMBER || 8010
let server

fixture('TodoMVC Advanced')
  .page(`http://localhost:${PORT}`)
  .before(() => {
    server = httpServer.createServer({ root: `${__dirname}/../..` })
    server.listen(PORT)
  })
  .after(() => server.close())
  .beforeEach(async (t) => {
    await t.typeText(Selector('.new-todo'), 'Walk the dog').pressKey('enter')
  })

test('exercises widths', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises widths', {
    widths: [375, 768, 1280, 1920],
  })
})

test('exercises percyCSS', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises percyCSS', {
    percyCSS: '.todo-list li { background: #fffde7 !important; }',
  })
})

test('exercises minHeight', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises minHeight', {
    minHeight: 2000,
  })
})

test('exercises enableJavaScript', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises enableJavaScript', {
    enableJavaScript: true,
  })
})

test('exercises responsiveSnapshotCapture', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises responsiveSnapshotCapture', {
    responsiveSnapshotCapture: true,
    widths: [375, 1280],
  })
})

test('exercises labels', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises labels', {
    labels: 'smoke,testcafe',
  })
})

test('exercises testCase', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises testCase', {
    testCase: 'todomvc-advanced-suite',
  })
})

test('exercises devicePixelRatio', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises devicePixelRatio', {
    devicePixelRatio: 2,
  })
})

test('exercises browsers override', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises browsers override', {
    browsers: ['chrome', 'firefox'],
  })
})

test('exercises readiness preset', async (t) => {
  await percySnapshot(t, 'TodoMVC Advanced > exercises readiness preset', {
    readiness: { preset: 'strict', timeoutMs: 5000 },
  })
})
