import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


type AccountType = {
  username: string,
  fullName: string,
  password: string,
}

const initialState: AccountType = {
    username: '',
    fullName: '',
    password: '',
  }

export const myAccountProvider = createSlice({
  name: 'myAccountProvider',
  initialState,
  reducers: {
    setMyAccount: (state,{payload}: PayloadAction<any> ) => {
      state.username = payload.username
      state.fullName = payload.fullName
      state.password = payload.password
    },
  },
});

export const { setMyAccount } = myAccountProvider.actions;

export const selectMyAccountProvider = (state: RootState) => state.myAccountProvider;

export default myAccountProvider.reducer;

