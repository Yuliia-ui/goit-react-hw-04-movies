import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Navigation from './Navigation';
import routes from '../routes';

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
      <Suspense fallback={<Loader />}>
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
