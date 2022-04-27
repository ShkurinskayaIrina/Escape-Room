import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { redirectToRoute } from './action';

import { loadCatalog, loadQuest } from './quests-data/quests-data';
import { errorHandle } from '../services/error-handle';
import { Quest, Quests, NewOrder } from '../types/quests';
import { APIRoute, AppRoute} from '../const';

export const fetchCatalog = createAsyncThunk(
  'quests/fetchCatalog',
  async () => {
    try {
      const {data} = await api.get<Quests>(APIRoute.Quests);
      store.dispatch(loadCatalog(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchQuest = createAsyncThunk(
  'quests/fetchQuest',
  async (questId: number) => {
    try {
      const {data} = await api.get<Quest>(`${APIRoute.Quests}/${questId}`);
      store.dispatch(loadQuest(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addOrderAction = createAsyncThunk(
  'quest/newOrder',
  async (orderPost:NewOrder) => {
    try {
      await api.post(`${APIRoute.Orders}`, orderPost);
      store.dispatch(redirectToRoute(AppRoute.MainPage));
    } catch (error) {
      errorHandle(error);
    }
  },
);

