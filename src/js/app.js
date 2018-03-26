import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/App';
import reducers from './store/reducers';

const wrapper = document.getElementById('app');

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, wrapper);
