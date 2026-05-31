import { AxiosResponse } from 'axios';
import { resolveRoute, ROUTES } from '../../../../constants';
import { getApiClient } from '../../../../lib';
import {
  ApiApplyFleetPartnerApplicationPayload,
  ApiApplyFleetPartnerApplicationResponse,
} from '../../../../types';

const buildFleetPartnerApplicationFormData = (
  payload: ApiApplyFleetPartnerApplicationPayload
) => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return;
    }

    if (value instanceof File) {
      formData.append(key, value);
      return;
    }

    formData.append(key, String(value));
  });

  return formData;
};

export const applyFleetPartnerApplication = async (
  payload: ApiApplyFleetPartnerApplicationPayload
) => {
  return await getApiClient().post<
    ApiApplyFleetPartnerApplicationResponse,
    AxiosResponse<ApiApplyFleetPartnerApplicationResponse>,
    FormData
  >(
    resolveRoute(ROUTES.applyFleetPartnerApplication),
    buildFleetPartnerApplicationFormData(payload),
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};
