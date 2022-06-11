import {configureStore, applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogsReducer'
import usersReducer from './reducers/usersReducer'
import allUsersReducer from './reducers/allUsersReducer';


const rootReducer = combineReducers({
    blogs : blogReducer,
    user : usersReducer,
    notification : notificationReducer,
    allUsers: allUsersReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
  export const persistor = persistStore(store)