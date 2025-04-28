import { api } from '../index';

interface DataUserResponse {
  name: string;
  email: string;
}

export const createUser = async (userData: {
  name: string;
  email: string;
}): Promise<DataUserResponse> => {
  const response = await api.post<DataUserResponse>('/users', userData);
  return response.data;
};
