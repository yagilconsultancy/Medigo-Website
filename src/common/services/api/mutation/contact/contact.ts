import { getApiClient } from '../../../../lib';
import { resolveRoute, ROUTES } from '../../../../constants';

export type ApiContactMessagePayload = {
  full_name: string;
  email: string;
  phone?: string | null;
  service_type: string;
  message: string;
};

export type ApiContactMessageResponse = {
  success: boolean;
  message?: string;
};

// Public contact form: the server saves the message and emails the MediGo team.
export const sendContactMessage = async (payload: ApiContactMessagePayload) => {
  return await getApiClient().post<ApiContactMessageResponse>(
    resolveRoute(ROUTES.sendContactMessage),
    payload
  );
};
