import { useQuery } from '@tanstack/react-query';

export const useSearchRiders = (...args: any[]) => {
  return useQuery({
    queryKey: ['useSearchRiders', ...args],
    queryFn: async () => ({ success: true, data: { riders: [] } }),
  });
};
