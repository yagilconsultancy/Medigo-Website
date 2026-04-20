import { useMutation } from '@tanstack/react-query';
import { login } from '../../../../../services/api/mutation/auth/login';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
