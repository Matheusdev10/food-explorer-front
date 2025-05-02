import { TProduct } from '../../../../@types/products';
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

export const getProductById = async (id: string): Promise<TProduct> => {
  const response = await api.get<TProduct>(`/products/${id}`);
  return response.data;
};

export const editProduct = async (
  id: string,
  data: Partial<TProduct>
): Promise<TProduct> => {
  const response = await api.put<TProduct>(`/products/${id}`, data);
  return response.data;
};
// export const editProduct = async (id: number, data: TProduct) => {
//   const response = await api.put(`/products/${id}`, data);
//   return response.data;
// };
