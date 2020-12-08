import getType from '../index';

describe('test usergaent', () => {
  it('getType is called', function () {
    expect(getType('')).toBeCalled;
  });

  it('getType return string', function () {
    expect(getType(new String(123))).toEqual('string');
  });

  it('getType return number', function () {
    expect(getType(new Number(123))).toEqual('number');
  });

  it('getType return boolean', function () {
    expect(getType(false)).toEqual('boolean');
  });

  it('getType return null', function () {
    expect(getType(null)).toEqual('null');
  });

  it('getType - symbol', function () {
    expect(getType(Symbol(123))).toEqual('symbol');
  });
});
