import { useQuery } from '@tanstack/react-query';

export const useGetFleetCompanyDrivers = (...args: any[]) => {
  return useQuery({
    queryKey: ['useGetFleetCompanyDrivers', ...args],
    queryFn: async () => ({ success: true, data: [] }),
  });
};
