import axios, { AxiosInstance } from 'axios';

// The public website has no sign-in. Every call it makes goes to a public
// endpoint (partner application, contact form, account deletion), so the
// client never sends a sign-in token and never redirects to a login page.
let apiClient: AxiosInstance | null = null;

export const getApiClient = () => {
  if (apiClient) {
    return apiClient;
  }

  const baseURL = process.env['NEXT_PUBLIC_BASE_API_URL'];

  if (!baseURL) {
    throw new Error(
      'NEXT_PUBLIC_BASE_API_URL is not defined in environment variables'
    );
  }

  apiClient = axios.create({
    baseURL,
    timeout: 60000,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    validateStatus: (status) => status >= 200 && status < 300,
  });

  return apiClient;
};

// Message for "too many requests" (HTTP 429). The server sends Retry-After
// in seconds; we round it to minutes for people.
export const tooManyRequestsMessage = (retryAfter?: string | null) => {
  const seconds = Number(retryAfter);
  if (Number.isFinite(seconds) && seconds > 0) {
    const minutes = Math.max(1, Math.ceil(seconds / 60));
    return `Too many attempts. Please try again in ${minutes} minute${
      minutes === 1 ? '' : 's'
    }.`;
  }
  return 'Too many attempts. Please wait a few minutes and try again.';
};
