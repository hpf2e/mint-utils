/*
 * @Author: alex_chen
 * @Date: 2022-05-11 10:21:16
 * @LastEditors: alex_chen
 * @LastEditTime: 2022-05-11 10:38:49
 * @Description: 滑动动画
 */
import raf from 'raf';

let scrollRafId: number;
const scrollList: { [key: number]: HTMLElement | Window } = {};

// 获取元素scrollTop
const getScrollTop = (ele: HTMLElement | Window): number => {
  if (ele === document.documentElement) {
    return (document.scrollingElement || document.documentElement).scrollTop;
  }
  if (ele === window) {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
  }
  return (ele as HTMLElement).scrollTop;
};
const getScrollLeft = (ele: HTMLElement | Window): number => {
  if (ele === document.documentElement) {
    return (document.scrollingElement || document.documentElement).scrollLeft;
  }
  if (ele === window) {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollLeft,
      document.body.scrollLeft,
    );
  }
  return (ele as HTMLElement).scrollLeft;
};

const scrollTo = (
  scrollContainer: HTMLElement | Window,
  top: number,
  left: number,
  duration: number,
) => {
  if (scrollList?.[scrollRafId] === scrollContainer) {
    raf.cancel(scrollRafId);
  }

  let count = 0;
  let fromLeft = 0;
  let fromTop = 0;

  if (scrollContainer === window) {
    fromLeft = getScrollLeft(scrollContainer);
    fromTop = getScrollTop(scrollContainer);
  } else {
    fromLeft = (scrollContainer as HTMLElement).scrollLeft;
    fromTop = (scrollContainer as HTMLElement).scrollTop;
  }

  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

  function animate() {
    if (scrollContainer === window) {
      const x = getScrollLeft(scrollContainer) + (left - fromLeft) / frames;
      const y = getScrollTop(scrollContainer) + (top - fromTop) / frames;
      scrollContainer.scrollTo(x, y);
    } else {
      (scrollContainer as HTMLElement).scrollLeft += (left - fromLeft) / frames;
      (scrollContainer as HTMLElement).scrollTop += (top - fromTop) / frames;
    }

    count += 1;
    if (count < frames) {
      scrollRafId = raf(animate);
      scrollList[scrollRafId] = scrollContainer;
    }
  }

  animate();
};

export default scrollTo;
