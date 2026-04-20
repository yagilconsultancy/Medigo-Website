import { useMutation } from '@tanstack/react-query';
import { refresh } from '../../../../../services/api/mutation/auth/refresh';

export const useRefresh = () => {
  return useMutation({
    mutationFn: refresh,
  });
};
