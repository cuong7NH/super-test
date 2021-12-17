import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeProviderReducer from '../providers/ThemeProvider/themeProviderSlice';
import accountProvider from '../providers/AccountProvider/accountProviderSlice';
import myAccountProvider from '../providers/AccountProvider/myAccountProviderSlice';
import soundProvider from '../store/soundStore'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeProvider: themeProviderReducer,
    accountProvider: accountProvider,
    soundProvider: soundProvider,
    myAccountProvider: myAccountProvider,
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
