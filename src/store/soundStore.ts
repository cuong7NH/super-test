import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

type SoundType = {
  isMute: boolean,
}

const initialState: SoundType = {
  isMute: false
}
export const soundProvider = createSlice({
  name: 'soundProvider',
  initialState,
  reducers: {
    setSound: (state) => {
      state.isMute = !state.isMute
    },
  },
});

export const { setSound } = soundProvider.actions;

export const selectSoundProvider = (state: RootState) => state.soundProvider;

export default soundProvider.reducer;

