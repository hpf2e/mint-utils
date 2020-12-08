import semverCompare from '../index';

describe('test usergaent', () => {
  it('semverCompare is calles', function () {
    expect(semverCompare('7.0.0', '7.1.1')).toBeCalled;
  });

  it('semverCompare return -1', () => {
    const res = semverCompare('7.0.0', '7.1.1');
    expect(res).toBe(-1);
  });

  it('semverCompare return 1', () => {
    const res = semverCompare('7.1.2', '7.1.1');
    expect(res).toBe(1);
  });

  it('semverCompare return 0', () => {
    const res = semverCompare('7.0.0', '7.0.0');
    expect(res).toBe(0);
  });
});
