import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Quest, Quests } from '../../types/quests';

export const getCatalog = (state: State): Quests => state[NameSpace.Data].questsCatalog;

export const getQuestCurrent = (state: State): Quest => state[NameSpace.Data].questCurrent;
