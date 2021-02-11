import { useCallback } from 'react';
// api
import api from 'services/api/auth';
import { setAuthData } from 'services/storage/auth';
// types
import { AuthEmailSigninRequestData } from 'entities/auth';

const useAuth = () => {
  const signIn = useCallback(async (values: AuthEmailSigninRequestData) => {
    const result = await api.signIn(values);
    const token = result?.user?.refreshToken;

    if (token) await setAuthData({ token });

    return result;
  }, []);

  const signOut = useCallback(async () => {
    await api.signOut();
  }, []);

  return {
    signIn,
    signOut,
  };
};

export default useAuth;
