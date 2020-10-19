import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Layout from './Layout/Layout';
import routes from '../routes';
import NotFound from './NotFound/NotFound';

const AsincHome = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "home-page" */),
);
const AsincMoviesPage = lazy(() =>
  import('../views/MoviePage' /* webpackChunkName: "movies-page" */),
);
const AsincMovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const App = () => (
  <Layout>
    <Suspense
      fallback={
        <div>
          <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
        </div>
      }
    >
      <Switch>
        <Route path={routes.homePage} exact component={AsincHome} />
        <Route
          path={routes.MovieDetailsPage}
          component={AsincMovieDetailsPage}
        />
        <Route path={routes.movies} component={AsincMoviesPage} />
        <Route component={NotFound} />
        <Redirect to={routes.HomePage} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
