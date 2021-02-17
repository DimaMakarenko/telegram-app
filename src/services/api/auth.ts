// firebase
import db, { auth } from '../firebase';
// types
import { AuthEmailSigninRequestData, AuthEmailSignUpRequestData } from 'entities/auth';

const USER_DATA_KEY = 'users';

export default {
  signIn: (data: AuthEmailSigninRequestData) =>
    auth.signInWithEmailAndPassword(data.email, data.password),
  signOut: () => auth.signOut(),
  signUp: (data: AuthEmailSignUpRequestData) =>
    auth.createUserWithEmailAndPassword(data.email, data.password),
  setUser: (data: { [x: string]: string }) => db.collection(USER_DATA_KEY).doc(data.uid).set(data),
  getUserByToken: (token: string) => db.collection(USER_DATA_KEY).where('token', '==', token).get(),
  getUserById: (id: string) => db.collection(USER_DATA_KEY).doc(id).get(),
  setToken: (uid: string, token: string) => db.collection(USER_DATA_KEY).doc(uid).update({ token }),
};
