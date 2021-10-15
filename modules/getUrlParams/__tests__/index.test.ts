import getUrlParams from '../index';

describe('test url link', () => {
  it('getUrlParams is called', function () {
    expect(getUrlParams('test')).toBeCalled;
  });

  it('getUrlParams return string', function () {
    expect(
      getUrlParams('utm_source', 'utm_source=gold_browser_extension'),
    ).toEqual('gold_browser_extension');
  });

  it('getUrlParams return undefined', function () {
    expect(getUrlParams('test', 'utm_source=gold_browser_extension')).toEqual(
      undefined,
    );
  });
});
