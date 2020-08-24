import { post } from './request';

export const signup = user => post('/api/v1/users/signup', user);
export const login = user => post('/api/v1/users/login', user);
