import { configureStore } from '@reduxjs/toolkit';
import { ProductReducer, SelectedProductReducer } from './reducers/ProductReducer';

const store = configureStore({
    reducer: {
        allProducts: ProductReducer,
        product: SelectedProductReducer
    }
})

export default store;