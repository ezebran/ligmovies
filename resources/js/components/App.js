import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Actors from './pages/Actors';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import MoviesList from './pages/MoviesList';

function App() {
  return (
    <BrowserRouter>
    	<Layout>
	    	<Switch>
		        <Route exact path="/home"  component={MoviesList} />
		        <Route exact path="/movies"  component={Movies} />
		        <Route exact path="/actors"  component={Actors} />
		        <Route exact path="/favorites"  component={Favorites} />
		        <Route component={NotFound} />
	    	</Switch>
      	</Layout>
    </BrowserRouter>
  );
}

export default App;
