import { useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';

function useSmoothScroll(ref) {
  const animateRef = useRef(null);

  function scrollToY(scrollTargetY, speed) {
    const scrollTop = ref.current.scrollTop;
    const scrollHeight = ref.current.scrollHeight;
    const distance = scrollTargetY - scrollTop;
    const step = Math.PI / (speed / 15);
    const cosParameter = distance / 2;

    let scrollCount = 0;
    let scrollMargin;
    function stepAnimation() {
      animateRef.current = requestAnimationFrame(stepAnimation);
      scrollCount += 1;
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * step);
      ref.current.scrollTop = scrollTop + distance * scrollMargin;
      // if (scrollCount >= Math.round(speed / 15)) {
      if (scrollCount >= Math.round(speed / 15)) {
        cancelAnimationFrame(animateRef.current);
      }
    }
    animateRef.current = requestAnimationFrame(stepAnimation);
  }

  useEffect(() => {
    const handleScroll = throttle(() => {
      cancelAnimationFrame(animateRef.current);
    }, 16);

    ref.current.addEventListener('scroll', handleScroll);
    ref.current.style.willChange = 'scroll-position';
    ref.current.style.transform = 'translateZ(0)';

    return () => {
        // ref.current.removeEventListener('scroll', handleScroll);
        // ref.current.style.willChange = '';
        // ref.current.style.transform = '';
        // cancelAnimationFrame(animateRef?.current);

    };
  }, []);

  return scrollToY;
}

export default useSmoothScroll;