import React from 'react'
import { render } from 'react-dom'

import Main from './components/main'
import Single from './components/single'
import PhotoGrid from './components/photogrid'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, {history} from './store'

//import css
import css from './styles/style.styl'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}/>
        <Route path="/view/:postId" component={Single}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))