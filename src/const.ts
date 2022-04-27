import { LavelRangeProps, GenresRangeProps } from './types/quests';

export enum AppRoute {
  MainPage = '/',
  QuestPage = '/detailed-quest/:id',
  PlugPage = '/plug-page',
  Contacts = '/constacts',
}

export enum NameSpace {
  Data = 'DATA',
  Quests = 'QUESTS',
}

export enum APIRoute {
  Quests = '/quests',
  Orders = '/orders',
}

export const LavelRange:LavelRangeProps = {
  Easy: 'простой',
  Medium: 'средний',
  Hard: 'сложный',
}

export const genresRange: GenresRangeProps = {
  'all genres': {
    name: 'Все квесты',
  },
  'adventures': {
    name: 'Приключения',
  },
  'horror': {
    name: 'Ужасы',
  },
  'mystic': {
    name: 'Мистика',
  },
  'detective': {
    name: 'Детектив',
  },
  'sci-fi': {
    name: 'Sci-fi',
  },
}

export const ALL_GENRES = 'all genres';
