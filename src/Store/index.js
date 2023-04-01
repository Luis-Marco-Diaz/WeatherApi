import { configureStore } from '@reduxjs/toolkit';
import products from './Slices/Products.Slice';

export default configureStore({
  reducer: {
      products
	}
})