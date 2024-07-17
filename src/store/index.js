import { configureStore } from '@reduxjs/toolkit'
import popularArticlesSlice from './slices/popularArticlesSlice';

const store = configureStore({
    reducer: {
        popularArticlesSlice: popularArticlesSlice,
    }
})

export default store;