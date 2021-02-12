export type AuthEmailSigninRequestData = {
  email: string;
  password: string;
};

export type AuthSession = {
  token: string;
};

export type AuthEmailSignUpRequestData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
