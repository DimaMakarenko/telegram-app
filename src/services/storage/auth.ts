// types
import { AuthSession } from 'entities/auth';

import Cookies from 'js-cookie';

const AUTH_DATA_KEY = 'auth';

export const getAuthData = async (): Promise<AuthSession['token'] | undefined> => {
  try {
    return await Cookies.get(AUTH_DATA_KEY);
  } catch (error) {
    // TODO: implement error handler
    console.log('getAuthData error', error);
  }
};

export const setAuthData = async (data: AuthSession): Promise<void> => {
  try {
    await Cookies.set(AUTH_DATA_KEY, data.token);
  } catch (error) {
    // TODO: implement error handler
    console.log('setAuthData error', error);
  }
};

export const clearAuthData = async (): Promise<void> => {
  try {
    await Cookies.remove(AUTH_DATA_KEY);
  } catch (error) {
    // TODO: implement error handler
    console.log('setAuthData error', error);
  }
};
