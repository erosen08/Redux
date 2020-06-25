import React from 'react'
import { Provider } from 'react-redux'

import GroceryPageContainer from '../containers/GroceryPageContainer'

const App = props => {
  return(
    <Provider store={props.store}>
      <Router history={browserHistory}>
        <Route path="/groceries" component={GroceryListContainer} />
        <Route path="/groceries/:id" component={GroceryShowContainer} />
      </Router>
    </Provider>
  )
}
