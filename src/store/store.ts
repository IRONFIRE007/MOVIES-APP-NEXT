import { configureStore } from '@reduxjs/toolkit'
import { constants } from 'fs';
import  mainReducer  from '../reducers/mainReducer';

export const store  = configureStore({
  reducer: {
      state: mainReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;