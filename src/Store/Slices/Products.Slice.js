import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const ProductsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts : (state, action) => {
            return action.payload
        }   
    }
})

export const getProductsThunk = () => dispatch =>{

    axios
        .get( "https://products-crud.academlo.tech/products/" )
        .then( resp => dispatch( setProducts(resp.data) ) )
        .catch( error => console.error(error) )

}

export const { setProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;
