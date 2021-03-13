import { useEffect, RefObject, useCallback } from 'react';

type Ref = RefObject<HTMLElement>;
type Callback = (e: MouseEvent) => void;

export const useOutsideClick = (ref: Ref, callback: Callback) => {
  const handleCallback = useCallback(
    (e: MouseEvent) => {
      // Don't do nothing if ref is not set or click target is ref itself
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      callback(e);
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener('click', handleCallback);

    return () => {
      document.removeEventListener('click', handleCallback);
    };
  }, [handleCallback]);
};
