import "./App.css";
import { Route, Switch } from "react-router";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import AuthorsView from "./views/AuthorsView";
import BooksView from "./views/BooksView";
import NotFoundView from "./views/NotFoundView";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/authors">
          <AuthorsView />
        </Route>
        <Route exact path="/books">
          <BooksView />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      {/* <p>Добро пожаловать!</p> */}
    </div>
  );
}

export default App;
