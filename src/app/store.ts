import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeProviderReducer from '../providers/ThemeProvider/themeProviderSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeProvider: themeProviderReducer,
    // userProvider:
    //
    // skillList:
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
