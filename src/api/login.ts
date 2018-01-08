import { LoginCredentials } from './model';

export const doLogin = (loginCredentials : LoginCredentials) : Promise<boolean> => {
  return Promise.resolve(loginCredentials.user === 'test' &&
                          loginCredentials.password === 'pass')
};