const { greet } = require('./index');

test('greet returns correct message', () => {
  expect(greet('World')).toBe('Hello, World!');
});
