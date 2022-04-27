import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { QuestsData } from '../../types/state';
import { Quest } from '../../types/quests';

const initialState: QuestsData = {
  questsCatalog: [],
  questCurrent: [] as unknown as Quest,
};

export const questsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadCatalog: (state, action) => {
      state.questsCatalog = action.payload;
    },
    loadQuest: (state, action) => {
      state.questCurrent = action.payload;
    },
  },
});

export const { loadCatalog, loadQuest } = questsData.actions;
