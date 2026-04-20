import { useQuery } from '@tanstack/react-query';

export const useGetAvailableDrivers = (...args: any[]) => {
  return useQuery({
    queryKey: ['useGetAvailableDrivers', ...args],
    queryFn: async () => ({ success: true, data: [] }),
  });
};
