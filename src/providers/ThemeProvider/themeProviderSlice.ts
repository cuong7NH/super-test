import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { THEME_OPTIONS } from '../../constant'

export interface themeProviderType {
  theme: string;
  color: string;
}

const initialState: themeProviderType = {
  theme: THEME_OPTIONS.LIGHT,
  color: '#8A3FFC',
};
export const themeProvider = createSlice({
  name: 'themeProvider',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
      state.color = action.payload === THEME_OPTIONS.DARK ? '#b889ff' : '#8A3FFC'
    },
  },
});

export const { setTheme } = themeProvider.actions;

export const selectThemeProvider = (state: RootState) => state.themeProvider;

export default themeProvider.reducer;

