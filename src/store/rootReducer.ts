import { combineReducers } from 'redux';
import loaderSlice from './features/loader/loaderSlice';
import popupSlice from './features/popup/popupSlice';
import { persistedUserReducer } from './features/user/userReducer';
import { authApi } from '_rtkQuery/api/authApi';
import postsApi from '_rtkQuery/api/postsApi';

export const rootReducer = combineReducers({
  user: persistedUserReducer,
  popup: popupSlice.reducer,
  loader: loaderSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer
});
