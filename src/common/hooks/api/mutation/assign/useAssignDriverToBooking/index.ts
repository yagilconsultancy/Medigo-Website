import { useMutation } from '@tanstack/react-query';

export const useAssignDriverToBooking = () => {
  return useMutation({
    mutationFn: async (payload: any) => payload,
  });
};
