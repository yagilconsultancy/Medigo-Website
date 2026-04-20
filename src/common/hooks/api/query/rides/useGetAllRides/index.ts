import { useQuery } from '@tanstack/react-query';

export const useGetAllRides = (...args: any[]) => {
  return useQuery({
    queryKey: ['useGetAllRides', ...args],
    queryFn: async () => ({ success: true, data: [] }),
  });
};
