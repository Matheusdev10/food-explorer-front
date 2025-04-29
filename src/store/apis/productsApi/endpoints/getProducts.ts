import { api } from '../../index';

interface DataProductsResponse {
  id: number;
  img: string;
  category: string;
  name: string;
  price: number;
  description: string;
  tags: Array<string>;
}

export const getProducts = async (): Promise<DataProductsResponse[]> => {
  const response = await api.get<DataProductsResponse[]>(`/products`);
  return response.data;
};
