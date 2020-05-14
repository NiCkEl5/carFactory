import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import ContactCreate from './contact/ContactCreate';
import ContactList from './contact/ContactList';
import InventoryList from './inventory/InventoryList';
import history from '../history';

class App extends React.Component {

  render() {
    return(
      <div className="ui container">
        <Router history={history}>
          <div>
          <Header pathHistory={history.location}/>
            <Switch>
              <Route path="/" exact component={ContactList} />
              <Route path="/new" exact component={ContactCreate} />
              <Route path="/Inventory" exact component={InventoryList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;