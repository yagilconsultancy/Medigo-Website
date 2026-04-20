import { AxiosResponse } from 'axios';
import { resolveRoute, ROUTES } from '../../../../constants';
import { getApiClient } from '../../../../lib';
import { ApiAuthResponse, ApiLoginPayload } from '../../../../types';

export const login = async (payload: ApiLoginPayload) => {
  return await getApiClient().post<
    ApiAuthResponse,
    AxiosResponse<ApiAuthResponse>,
    ApiLoginPayload
  >(resolveRoute(ROUTES.login), payload);
};
