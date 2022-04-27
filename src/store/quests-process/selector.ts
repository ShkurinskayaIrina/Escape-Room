import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getGenreCurrent = (state: State): string => state[NameSpace.Quests].genreCurrent;
