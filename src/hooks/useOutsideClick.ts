import { useEffect, RefObject } from 'react';

type Ref = RefObject<HTMLElement>;
type Callback = (e: MouseEvent) => void;

export const useOutsideClick = (ref: Ref, callback: Callback) => {
  const handleCallback = (e: MouseEvent) => {
    // Don't do nothing if ref is not set or click target is ref itself
    if (!ref.current || ref.current.contains(e.target as Node)) return;
    callback(e);
  };

  useEffect(() => {
    document.addEventListener('click', handleCallback);

    return () => {
      document.removeEventListener('click', handleCallback);
    };
  }, [handleCallback]);
};
