import { useQuery } from '@tanstack/react-query';

export const useSearchDrivers = (...args: any[]) => {
  return useQuery({
    queryKey: ['useSearchDrivers', ...args],
    queryFn: async () => ({ success: true, data: { drivers: [] } }),
  });
};
