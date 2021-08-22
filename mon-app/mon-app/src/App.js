import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
import HomePage from "./HomePage/HomePage"
import "./App.css"
import MoviePage from "./MoviePage/MoviePage"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
          >
            <HomePage />
          </Route>
          <Route path="/movie/:id">
            <MoviePage />

          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
