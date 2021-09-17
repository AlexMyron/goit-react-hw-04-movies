import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation";

const HomeView = lazy(() =>
  import("./views/HomeView/HomeView" /* webpackChunkName: "Home-view" */)
);
const MoviesView = lazy(() =>
  import("./views/MoviesView" /* webpackChunkName: "Movie-view" */)
);
const SearchMoviesView = lazy(() =>
  import("./views/SearchMoviesView" /* webpackChunkName: "SearchMovies-view" */)
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<p>Loading... </p>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/movies">
            <SearchMoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MoviesView />
          </Route>
          <Route>
            <p>Such page was not found.</p>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
