import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


type AccountType = {
  username: string,
  fullName: string,
  password: string,
}

const initialState: AccountType[] = [
  {
    username: 'cuongnh',
    fullName: 'Nguyễn Hữu Cường',
    password: '123456',
  }
]
export const themeProvider = createSlice({
  name: 'accountProvider',
  initialState,
  reducers: {
    addAccount: (state,{payload}: PayloadAction<any> ) => {
      return [
        ...state,
        {
          username: payload.username,
          fullName: payload.fullName,
          password: payload.password,
        }
      ]
    },
  },
});

export const { addAccount } = themeProvider.actions;

export const selectAccountProvider = (state: RootState) => state.accountProvider;

export default themeProvider.reducer;

