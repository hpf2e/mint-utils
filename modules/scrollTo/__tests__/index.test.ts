/*
 * @Author: alex_chen
 * @Date: 2022-05-11 10:42:05
 * @LastEditors: alex_chen
 * @LastEditTime: 2022-05-11 10:43:41
 * @Description: 测试
 */
import scrollTo from '../index';

describe('test scrollTo action', () => {
  it('getUrlParams is called', function () {
    expect(scrollTo(window, 0, 200, 300)).toBeCalled;
  });
});
