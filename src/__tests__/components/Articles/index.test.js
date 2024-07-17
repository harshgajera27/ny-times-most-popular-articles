import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Articles from './../../../components/Articles'; // Adjust the path as per your project structure
import apiService from '../../../services/ApiService';

// Mocking ApiService module
jest.mock('../../../services/ApiService');

// Mocking window.matchMedia
window.matchMedia = jest.fn(() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
}));

describe('Articles component', () => {
    const mockStore = configureStore([]);
    let store;
    let initialState;

    beforeEach(() => {
        initialState = {
            popularArticlesSlice: {
                popularArticles: [
                    {
                        id: 1,
                        title: 'Sample Article 1',
                        abstract: 'Sample abstract 1',
                        media: [
                            { 'media-metadata': [{ url: 'sample-url-1' }, { url: 'sample-url-2' }, { url: 'sample-url-3' }] }
                        ]
                    },
                    {
                        id: 2,
                        title: 'Sample Article 2',
                        abstract: 'Sample abstract 2',
                        media: [
                            { 'media-metadata': [{ url: 'sample-url-4' }, { url: 'sample-url-5' }, { url: 'sample-url-6' }] }
                        ]
                    }
                ]
            }
        };
        store = mockStore(initialState);
    });

    it('renders all articles', async () => {
        // Mocking async API call
        apiService.getMostPopularArticles.mockResolvedValueOnce(initialState.popularArticlesSlice.popularArticles);

        render(
            <Provider store={store}>
                <Router>
                    <Articles />
                </Router>
            </Provider>
        );

        // Wait for articles to be fetched and loading spinner to disappear
        await waitFor(() => {
            const articleTitles = screen.getAllByTestId('article-title');
            expect(articleTitles.length).toBe(2); // Assuming we have 2 articles in initialState
        });
    });

    it('navigates to article details on card click', async () => {
        // Mocking async API call
        apiService.getMostPopularArticles.mockResolvedValueOnce(initialState.popularArticlesSlice.popularArticles);

        render(
            <Provider store={store}>
                <Router>
                    <Articles />
                </Router>
            </Provider>
        );

        // Wait for articles to be fetched and rendered
        await waitFor(() => {
            const articleCards = screen.getAllByRole('article');
            expect(articleCards.length).toBe(2); // Assuming we have 2 articles in initialState
        });

        // Mock navigate function
        const mockNavigate = jest.fn();
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: () => mockNavigate
        }));

        // Click on the first article card
        const articleCard = screen.getAllByRole('article')[0];
        userEvent.click(articleCard);
    });

});
