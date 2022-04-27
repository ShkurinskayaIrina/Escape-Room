import { combineReducers } from '@reduxjs/toolkit';
import { questsData } from './quests-data/quests-data';
import { questsProcess } from './quests-process/quests-process';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Data]: questsData.reducer,
  [NameSpace.Quests]: questsProcess.reducer,
});
