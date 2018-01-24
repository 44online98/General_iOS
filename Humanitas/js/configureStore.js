

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import promise from './promise';
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import reducers from './reducers';

var middlewares = compose(applyMiddleware(thunk,promise), autoRehydrate());

export default function configureStore() {
  const store = createStore(reducers, undefined, middlewares);
  persistStore(store, {storage: AsyncStorage});
  return store;
}
