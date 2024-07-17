import { configureStore } from '@reduxjs/toolkit';
import popularArticlesSlice, { getPopularArticles } from './slices/popularArticlesSlice';

describe('Redux Store', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                popularArticlesSlice: popularArticlesSlice,
            },
        });
    });

    test('should configure store with the popularArticlesSlice reducer', () => {
        const state = store.getState();
        expect(state.popularArticlesSlice).toEqual({
            popularArticles: [],
        });
    });

    test('should handle getPopulerNews action', () => {
        const newPopularArticles = [
            {
                id: 1,
                title: 'Test Article 1',
                abstract: 'This is a test abstract 1.',
                updated: '2023-07-15T12:00:00Z',
                byline: 'By Test Author 1',
                media: [
                    {
                        'media-metadata': [
                            { url: 'https://example.com/image1.jpg' },
                            { url: 'https://example.com/image2.jpg' },
                            { url: 'https://example.com/image3.jpg' }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: 'Test Article 2',
                abstract: 'This is a test abstract 2.',
                updated: '2023-07-16T12:00:00Z',
                byline: 'By Test Author 2',
                media: [
                    {
                        'media-metadata': [
                            { url: 'https://example.com/image1.jpg' },
                            { url: 'https://example.com/image2.jpg' },
                            { url: 'https://example.com/image3.jpg' }
                        ]
                    }
                ]
            }
        ];

        store.dispatch(getPopularArticles(newPopularArticles));
        const state = store.getState();
        expect(state.popularArticlesSlice.popularArticles).toEqual(newPopularArticles);
    });
});
