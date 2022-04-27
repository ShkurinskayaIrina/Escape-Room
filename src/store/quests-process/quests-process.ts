import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, ALL_GENRES } from '../../const';
import { QuestsProcess } from '../../types/state';

const initialState: QuestsProcess = {
  genreCurrent: ALL_GENRES,
};

export const questsProcess = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    chooseGenre: (state, action) => {
      state.genreCurrent = action.payload;
    },
  },
});

export const { chooseGenre } = questsProcess.actions;
