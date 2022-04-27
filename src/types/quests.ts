export type Quest = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: string,
  peopleCount: number[],
  duration: 120
}

export type Quests = Quest[];

export type LavelRangeProps = {
  [key: string]: string,
};

type GenreRangeProps = {
  name: string,
};

export type GenresRangeProps = {
  [key: string]: GenreRangeProps,
};

export type NewOrder = {
  name: string,
  peopleCount: number,
  phone: string,
  isLegal: boolean,
}
