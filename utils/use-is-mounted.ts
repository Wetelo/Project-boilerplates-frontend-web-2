import { useEffect, useState } from 'react';

/**
 * Hook to determine if a component is mounted.
 * @returns {boolean} `true` if the component is mounted, `false` otherwise.
 */
export const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};
