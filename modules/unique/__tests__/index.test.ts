import unique from '../index';

describe('test url link', () => {
  it('unique is called', function () {
    expect(unique([1, 1, 2])).toBeCalled;
  });

  // it('getUrlParams return string', function () {
  //   expect(
  //     unique('utm_source', 'utm_source=gold_browser_extension'),
  //   ).toEqual('gold_browser_extension');
  // });

  // it('getUrlParams return undefined', function () {
  //   expect(unique('test', 'utm_source=gold_browser_extension')).toEqual(
  //     undefined,
  //   );
  // });
});
