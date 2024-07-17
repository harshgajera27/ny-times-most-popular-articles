import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './constants/routesConstants';
import Articles from './components/Articles';
import ArticlesDetails from './components/Articles/details';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path={routes.Articles} element={<Articles />} exact />
        <Route path={routes.ArticlesDetails} element={<ArticlesDetails />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
