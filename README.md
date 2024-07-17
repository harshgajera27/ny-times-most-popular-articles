## NY Times Popular Articles App

This app brings you the hottest news articles on the New York Times website! It leverages the official NY Times Most Popular API to fetch and display the articles that are getting the most views.

### Getting Started

Grab the code: Clone this repository to your local machine.

Set up the project: Install all the necessary code pieces by running npm install in your terminal.

Create an API Key: You'll need a key to access the NY Times API. Head over to the developer portal (link provided below) and register for your own. Save the key in a new file named .env located in the project's root directory. In this file, add two lines:

REACT_APP_API_KEY=your_api_key (replace "your_api_key" with your actual key)
REACT_APP_API_BASE_URL=https://api.nytimes.com (this sets the base URL for the API calls)
Launch the app: Now you're ready to see the latest buzz! Run npm start in your terminal to fire up the app.

### Testing

Unit Tests: Want to peek under the hood? Run npm test to execute unit tests and ensure everything's working as expected.
End-to-End Tests (Optional)

If you'd like to perform more comprehensive tests simulating real user interactions, you can leverage Cypress, a popular testing tool. Here's how:

Start the app as usual using npm start.
Verify that the app is running at http://localhost:3000 in your browser.
To open the Cypress test runner in your browser, use npx cypress open. Alternatively, run npm run e2e:chrome for browser-specific testing using Chrome.
Building for Production

Ready to share your creation with the world? Run npm run build to generate a production-ready version of the app.

### NY Times Developer Portal:
https://developer.nytimes.com/get-started
