import axios from 'axios';
import apiService from './ApiService';

const mockArticles = [
    {
        id: 1,
        title: 'Sample Article 1',
        abstract: 'This is a sample abstract 1.',
        updated: '2024-07-15T12:00:00Z',
        byline: 'By Sample Author 1',
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
        title: 'Sample Article 2',
        abstract: 'This is a sample abstract 2.',
        updated: '2024-07-16T12:00:00Z',
        byline: 'By Sample Author 2',
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

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({
        data: {
            results: mockArticles
        },
    })),
}));

describe('apiService', () => {
    process.env.REACT_APP_API_BASE_URL = 'https://api.nytimes.com';
    process.env.REACT_APP_API_KEY = 'FhA2eA0TqU55htpicRRsTGRI7S71Nr00';

    it('should throw an error if the API request fails', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject(new Error('API request failed')));
        await expect(apiService.getMostPopularArticles()).rejects.toThrowError('API request failed');
    });

    it('should retrieve the most popular articles', async () => {
        const result = await apiService.getMostPopularArticles();

        expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_BASE_URL}/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`);
        expect(result).toEqual(mockArticles);
    });

    it('should retrieve the most popular articles for a specified period', async () => {
        const period = 7;
        const result = await apiService.getMostPopularArticles(period);

        expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_BASE_URL}/svc/mostpopular/v2/viewed/${period}.json?api-key=${process.env.REACT_APP_API_KEY}`);
        expect(result).toEqual(mockArticles);
    });
});