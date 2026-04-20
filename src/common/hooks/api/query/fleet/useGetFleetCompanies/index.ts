import { useQuery } from '@tanstack/react-query';

export const useGetFleetCompanies = (...args: any[]) => {
  return useQuery({
    queryKey: ['useGetFleetCompanies', ...args],
    queryFn: async () => ({ success: true, data: [] }),
  });
};
