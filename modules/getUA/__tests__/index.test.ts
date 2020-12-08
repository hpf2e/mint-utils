import { clear, mockUserAgent } from 'jest-useragent-mock';
import getUA from '../index';

describe('test usergaent', () => {
  afterEach(() => {
    clear();
  });

  it('getUA return is an object', function () {
    expect(getUA()).toBeCalled;
  });

  it('getUA return iOS', () => {
    const mockAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
    mockUserAgent(mockAgent);

    const env = getUA();
    expect(env['isIOS']).toBe(true);
  });

  it('getUA return isAndroid', () => {
    const mockAgent =
      'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36';
    mockUserAgent(mockAgent);

    const env = getUA();
    expect(env['isAndroid']).toBe(true);
  });
});
