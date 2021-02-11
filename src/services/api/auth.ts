// firebase
import { auth } from '../firebase';
// types
import { AuthEmailSigninRequestData } from 'entities/auth';

export default {
  signIn: (data: AuthEmailSigninRequestData) =>
    auth.signInWithEmailAndPassword(data.email, data.password),
  signOut: () => auth.signOut(),
};
