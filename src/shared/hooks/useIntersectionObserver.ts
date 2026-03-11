import { useEffect, useRef, useState, type RefObject } from 'react';

export function useIntersectionObserver(
  target: RefObject<HTMLElement | null>,
  options: IntersectionObserverInit = {},
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = target.current;
    if (!targetElement) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observerRef.current.observe(targetElement);

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [target, options]);

  return isIntersecting;
}
