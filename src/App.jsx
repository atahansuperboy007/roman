import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Form from "./comp/Form";
import  './style.css';
import MovieList from './comp/MovieList';
import Search from "./comp/Search";
import Soon from "./comp/Soon";
import Movie from "./Movie";
//import movies from '../movies.json';

function App() {
  return (
    <div className="main">
      <div className="container">
      <BrowserRouter>
      <header>
        <Link to = "/" className="logo">
          Movie App
        </Link>
        <div className="links">
          <Link to = "/soon">Скоро выйдут</Link>
          <Link to = "/soon">Фильмы в кино</Link>
          <Link to = "/soon">Популярные</Link>
          <Link to = "/soon">Советские</Link>
        </div>
        <div className="search">
          <Form/>
        </div>
      </header>
      <Switch>
        <Route path="/soon">
          <Soon/>
        </Route>
        <Route exact path="/">
          <MovieList/>
        </Route>
        <Route path = "/movie/:id">
          <Movie/>
        </Route>
        <Route path = "/search/:q">
          <Search/>
        </Route>
      </Switch>
      <hr></hr>
      <footer>
        Created by IPU - company <br></br>
        (c) 2021.Все права защищены.
      </footer>
      </BrowserRouter>
      </div>
    </div>
  );
}


export default App;