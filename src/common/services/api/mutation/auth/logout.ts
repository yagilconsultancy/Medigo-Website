import { AxiosResponse } from 'axios';
import { resolveRoute, ROUTES } from '../../../../constants';
import { getApiClient } from '../../../../lib';
import { ApiAuthResponse, ApiLoginRefreshRequest } from '../../../../types';

export const logout = async (payload: ApiLoginRefreshRequest) => {
  return await getApiClient().post<
    ApiAuthResponse,
    AxiosResponse<ApiAuthResponse>,
    ApiLoginRefreshRequest
  >(resolveRoute(ROUTES.logout), payload);
};
