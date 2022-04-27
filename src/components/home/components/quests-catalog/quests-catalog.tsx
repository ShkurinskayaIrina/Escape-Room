import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import { LavelRange, genresRange, ALL_GENRES } from '../../../../const';
import { chooseGenre } from '../../../../store/quests-process/quests-process';
import { getCatalog } from '../../../../store/quests-data/selector';
import { getGenreCurrent } from '../../../../store/quests-process/selector';
import * as S from './quests-catalog.styled';

import { useAppSelector, useAppDispatch } from '../../../../hooks';

function QuestsCatalog(): JSX.Element {

  const questsCatalog = useAppSelector(getCatalog);
  const genreCurrent = useAppSelector(getGenreCurrent);

  const dispatch = useAppDispatch();

  const genresCatalog = new Set(questsCatalog.map((quest) => quest.type));
  const genresList = [ALL_GENRES,...genresCatalog];

  const quests = genreCurrent===ALL_GENRES ? questsCatalog :questsCatalog.filter((quest) => quest.type === genreCurrent);

    return (
      <>
        <S.Tabs>
          {genresList.map((genre, index)=>{
            const keyValue = `genre-${index}`;

            let genreText = '';
            Object.keys(genresRange).forEach((key) => {
              if (genre===key) {
                genreText = genresRange[key].name;
              }
            }, genresRange);

            return (
              <S.TabItem key={keyValue}
              onClick = {() => {dispatch(chooseGenre(genre));}}>
                <S.TabBtn $isActive={genreCurrent===genre} >
                  {genreText===genresRange['all genres'].name ? <IconAllQuests/>:''}
                  {genreText===genresRange['adventures'].name ? <IconAdventures/>:''}
                  {genreText===genresRange['horror'].name ? <IconHorrors/>:''}
                  {genreText===genresRange['mystic'].name ? <IconMystic/>:''}
                  {genreText===genresRange['detective'].name ? <IconDetective/>:''}
                  {genreText===genresRange['sci-fi'].name ? <IconScifi/>:''}
                  <S.TabTitle>{genreText}</S.TabTitle>
                </S.TabBtn>
              </S.TabItem>
            )
          })}
        </S.Tabs>

        <S.QuestsList>
          {quests.map(({id, title, coverImg, peopleCount, level}, index) => {
            const keyValue = `quest-${index}`;
            const levelKey = (level[0].toUpperCase() + level.substring(1));
            const levelText = LavelRange[levelKey];

            return (
              <S.QuestItem key={keyValue}>
                <S.QuestItemLink to={`/detailed-quest/${id}`}>
                  <S.Quest>
                    <S.QuestImage
                      src={coverImg}
                      width="344"
                      height="232"
                      alt={title}
                    />

                    <S.QuestContent>
                      <S.QuestTitle>{title}</S.QuestTitle>

                      <S.QuestFeatures>
                        <S.QuestFeatureItem>
                          <IconPerson />
                          {`${peopleCount.join('-')} чел`}
                        </S.QuestFeatureItem>
                        <S.QuestFeatureItem>
                          <IconPuzzle />
                          {levelText}
                        </S.QuestFeatureItem>
                      </S.QuestFeatures>
                    </S.QuestContent>
                  </S.Quest>
                </S.QuestItemLink>
              </S.QuestItem>
            )})
          }
        </S.QuestsList>
      </>
    )
}

export default QuestsCatalog;
