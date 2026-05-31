import { useMutation } from '@tanstack/react-query';
import { applyFleetPartnerApplication } from '../../../../../services';

export const useApplyFleetPartnerApplication = () => {
  return useMutation({
    mutationFn: applyFleetPartnerApplication,
  });
};
