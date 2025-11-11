import axios from 'axios';

export async function bootstrap() {
  const existingToken = localStorage.getItem('token');

  if (existingToken && existingToken.startsWith('ey')) {
    console.log('Using existing token from localStorage');
    axios.defaults.headers.common['Authorization'] = `Bearer ${existingToken}`;
    return;
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/bootstrap`
    );

    const token = response.data;

    if (typeof token === 'string' && token.split('.').length === 3) {
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log('Bootstrap token saved:', token);
    } else {
      console.error('Invalid token received from backend:', token);
    }
  } catch (error: any) {
    if (error.response?.status === 403) {
      console.log('Bootstrap already executed');
    } else {
      console.error('Bootstrap request failed:', error.response?.data || error);
    }
  }
}
