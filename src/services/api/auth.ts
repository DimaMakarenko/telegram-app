// firebase
import db, { auth } from '../firebase';
// types
import { AuthEmailSigninRequestData, AuthEmailSignUpRequestData } from 'entities/auth';
import { User } from 'entities/user';

const USER_DATA_KEY = 'auth';

export default {
  signIn: (data: AuthEmailSigninRequestData) =>
    auth.signInWithEmailAndPassword(data.email, data.password),
  signOut: () => auth.signOut(),
  signUp: (data: AuthEmailSignUpRequestData) =>
    auth.createUserWithEmailAndPassword(data.email, data.password),
  setUser: (data: User) => db.collection(USER_DATA_KEY).doc(data.uid).set(data),
};
