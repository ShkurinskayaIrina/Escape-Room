import { Quest, Quests } from '../types/quests';
import { store } from '../store/index.js';

export type QuestsData = {
  questsCatalog: Quests,
  questCurrent: Quest,
};

export type QuestsProcess = {
  genreCurrent: string,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
