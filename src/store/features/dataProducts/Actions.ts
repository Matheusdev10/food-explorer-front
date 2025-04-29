import { TProduct } from '../../../@types/products';
import { store } from '../../../store';
import { setDataProducts } from './Slice';
const { dispatch } = store;

export const setDataContext = (data: TProduct[]) => {
  dispatch(setDataProducts(data));
};
