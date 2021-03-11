import httpServer from 'http-server';
import { Selector } from 'testcafe';
import percySnapshot from '@percy/testcafe';

// Big thank you to fvitas for putting together this test suite!
// source: https://github.com/fvitas/testcafe-todomvc
class TodoPage {
  constructor() {
    this.input = Selector('.new-todo');
    this.editInput = Selector('.edit');
    this.todoItems = Selector('.todo-list li');
    this.firstTodoItem = Selector('.todo-list li:nth-child(1)');
    this.completedTodos = Selector('.completed');
    this.completeAll = Selector('.toggle-all');
    this.deleteCompleted = Selector('.clear-completed');
    this.showActiveLink = Selector('[href="#/active"]');
    this.showCompletedLink = Selector('[href="#/completed"]');
  }
}

const todoPage = new TodoPage();
const PORT = process.env.PORT_NUMBER || 8000;
let server;

fixture('Test TodoMVC App')
  .page(`http://localhost:${PORT}`)
  .before(() => {
    server = httpServer.createServer({ root: `${__dirname}/..` });
    server.listen(PORT);
  })
  .after(() => {
    server.close();
  });

test('Create todo', async (t) => {
  await t.typeText(todoPage.input, 'write blog post about JS').pressKey('enter');

  await percySnapshot(t, 'Created a todo');
  await t.expect(todoPage.todoItems.count).eql(1);

  await t.expect(todoPage.firstTodoItem.textContent).contains('write blog post about JS');
});

test('Complete one todo', async (t) => {
  await t
    .typeText(todoPage.input, 'write blog post about JS')
    .pressKey('enter')

    .typeText(todoPage.input, 'buy some beer')
    .pressKey('enter');

  await t.click(todoPage.todoItems.nth(0).find('.toggle'));
  await t.expect(todoPage.todoItems.nth(0).hasClass('completed')).ok();
  await percySnapshot(t, 'Completed TODO');
  await t.expect(todoPage.todoItems.count).eql(2);
});

test('Complete all todos', async (t) => {
  await t
    .typeText(todoPage.input, 'write blog post about JS')
    .pressKey('enter')

    .typeText(todoPage.input, 'buy some beer')
    .pressKey('enter')

    .typeText(todoPage.input, 'watch a movie')
    .pressKey('enter')

    .typeText(todoPage.input, 'go to a meeting')
    .pressKey('enter');

  await t.expect(todoPage.todoItems.count).eql(4).expect(todoPage.completedTodos.count).eql(0);

  await t.click(todoPage.completeAll);
  await t.expect(todoPage.completedTodos.count).eql(4);
  await percySnapshot(t, 'All TODOs completed');
});
