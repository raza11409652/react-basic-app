import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutContainer from "../container/about";
import HomeContainer from "../container/home";
import MovieContainer from "../container/movie";
import SingleMovieContainer from "../container/singleMovie";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={HomeContainer}></Route>
        <Route exact path={"/about"} component={AboutContainer}></Route>
        <Route exact path={"/movies"} component={MovieContainer}></Route>
        <Route
          exact
          path={"/movies/:id"}
          component={SingleMovieContainer}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;

/**
 * BrowseRouter->switch->case1-> case2->case3-> default ...
 */
