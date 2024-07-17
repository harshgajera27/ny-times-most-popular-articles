import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    popularArticles: []
};

const popularArticlesSlice = createSlice({
    name: 'popularArticles',
    initialState,
    reducers: {
        getPopularArticles: (state, action) => {
            state.popularArticles = action.payload;
        }
    }
});

export const { getPopularArticles } = popularArticlesSlice.actions
export default popularArticlesSlice.reducer;
