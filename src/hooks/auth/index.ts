import { useCallback, useContext } from 'react';
// api
import api from 'services/api/auth';
import { setAuthData } from 'services/storage/auth';
// context
import { UserContext, UserContextType } from 'context/userContext';
// types
import { AuthEmailSigninRequestData, AuthEmailSignUpRequestData } from 'entities/auth';
import { User } from 'entities/user';

const useAuth = () => {
  const { setUser } = useContext(UserContext) as UserContextType;

  const getUser = useCallback(
    async (token: string): Promise<void> => {
      const result = await api
        .getUserByToken(token)
        .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()))
        .catch(() => undefined);
      const user = result?.[0];

      if (user) {
        // @ts-ignore
        setUser(user);
      }
    },
    [setUser],
  );

  const signIn = useCallback(async (values: AuthEmailSigninRequestData): Promise<unknown> => {
    try {
      const result = await api.signIn(values);
      const token = result?.user?.refreshToken;
      const uid = result.user?.uid;

      if (token && uid) {
        await setAuthData({ token });
        await api.setToken(uid, token);
        const user = await api.getUserById(uid);
        // @ts-ignore
        setUser(user.data());
      }

      return result;
    } catch {
      console.log('error');
    }
  }, []);

  const signUp = useCallback(
    async (values: AuthEmailSignUpRequestData): Promise<unknown> => {
      const result = await api.signUp(values);
      const uid = result?.user?.uid;
      const token = result?.user?.refreshToken;

      if (uid && token) {
        const user: User = {
          firstName: values.firstName,
          lastName: values.lastName,
          uid,
          email: values.email,
          token,
        };

        api.setUser(user);
        setUser(user);
        await setAuthData({ token });
      }
      return result;
    },
    [setUser],
  );

  const signOut = useCallback(async (): Promise<void> => {
    await api.signOut();
  }, []);

  return {
    signIn,
    signUp,
    signOut,
    getUser,
  };
};

export default useAuth;
