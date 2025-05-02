import { api } from '../index';

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}

export interface ISessionsResponse {
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
    isAdmin: number;
  };
  token: string;
}

export const createUser = async (data: CreateUserPayload) => {
  const response = await api.post('/users', data);
  return response.data;
};

export const sessions = async (userData: {
  email: string;
  password: string;
}): Promise<ISessionsResponse> => {
  const response = await api.post<ISessionsResponse>('/sessions', userData);
  return response.data;
};
