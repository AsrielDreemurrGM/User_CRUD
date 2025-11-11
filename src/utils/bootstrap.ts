import axios, { AxiosError } from 'axios';

import type { BootstrapResponse } from '../types/BootstrapResponse';
import type { BackendError } from '../types/BackendError';

export async function bootstrap(): Promise<void> {
  const existingToken = localStorage.getItem('token');

  if (existingToken && existingToken.startsWith('ey')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${existingToken}`;
    return;
  }

  try {
    const response = await axios.get<BootstrapResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/api/bootstrap`
    );

    const token = response.data.token;

    if (typeof token === 'string' && token.split('.').length === 3) {
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      console.error('Invalid token received from backend:', token);
    }
  } catch (err) {
    const error = err as AxiosError<BackendError>;
    if (error.response?.status === 403) {
      console.log('Bootstrap already executed');
    } else {
      console.error(
        'Bootstrap request failed:',
        error.response?.data || error.message
      );
    }
  }
}
