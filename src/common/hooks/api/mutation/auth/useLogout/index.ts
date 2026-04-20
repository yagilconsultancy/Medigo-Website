import { useMutation } from '@tanstack/react-query';
import { logout } from '../../../../../services/api/mutation/auth/logout';

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
