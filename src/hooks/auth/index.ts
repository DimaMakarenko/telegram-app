import { useCallback } from 'react';
// api
import api from 'services/api/auth';
import { setAuthData } from 'services/storage/auth';
// types
import { AuthEmailSigninRequestData, AuthEmailSignUpRequestData } from 'entities/auth';
import { User } from 'entities/user';

const useAuth = () => {
  const signIn = useCallback(async (values: AuthEmailSigninRequestData) => {
    const result = await api.signIn(values);
    const token = result?.user?.refreshToken;

    if (token) await setAuthData({ token });

    return result;
  }, []);

  const signUp = useCallback(async (values: AuthEmailSignUpRequestData) => {
    const result = await api.signUp(values);
    const uid = result?.user?.uid;

    if (uid) {
      const user: User = { firstName: values.firstName, lastName: values.lastName, uid };
      api.setUser(user);
    }
    return result;
  }, []);

  const signOut = useCallback(async () => {
    await api.signOut();
  }, []);

  return {
    signIn,
    signUp,
    signOut,
  };
};

export default useAuth;
