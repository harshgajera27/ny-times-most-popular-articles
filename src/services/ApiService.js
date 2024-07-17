import axios from 'axios';

const apiService = {
  async getMostPopularArticles(period = 1) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/svc/mostpopular/v2/viewed/${period}.json?api-key=${process.env.REACT_APP_API_KEY}`);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  }
}

export default apiService;