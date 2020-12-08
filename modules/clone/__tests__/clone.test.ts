import clone from '../index';

test('当前项目版本为 1.0.0', () => {
  expect(clone()).toBe(true);
});
