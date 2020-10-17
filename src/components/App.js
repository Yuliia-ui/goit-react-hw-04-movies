import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Layout from './Layout';
import Navigation from './Navigation';
import routes from '../routes';
import NotFound from './NotFound/NotFound';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const App = () => (
  <Navigation>
    <Layout>
      <Suspense
        fallback={
          <div>
            <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
          </div>
        }
      >
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={NotFound} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Layout>
  </Navigation>
);

export default App;
