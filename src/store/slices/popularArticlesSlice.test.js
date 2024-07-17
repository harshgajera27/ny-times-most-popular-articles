import popularArticlesSlice, { getPopularArticles } from "./popularArticlesSlice";

const mockArticles = [
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

describe('popularArticlesSlice', () => {
    const initialState = {
        popularArticles: [],
    };

    it('should return the initial state', () => {
        expect(popularArticlesSlice(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle getPopularArticles', () => {
        const previousState = { popularArticles: [] };
        const newPopularArticles = mockArticles;
        expect(popularArticlesSlice(previousState, getPopularArticles(newPopularArticles))).toEqual({
            popularArticles: newPopularArticles,
        });
    });

    it('getPopularArticles action creator returns correct action', () => {
        const news = mockArticles;
        const action = getPopularArticles(news);
        expect(action).toEqual({
            type: 'popularArticles/getPopularArticles',
            payload: news,
        });
    });
});