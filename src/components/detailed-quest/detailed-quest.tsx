import { useEffect, useParams, useState } from '../common/common';
import { MainLayout } from '../../components/common/common';
import { BookingModal } from './components/components';
import NotFoundPage from '../not-found-page/not-found-page';

import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import { getCatalog, getQuestCurrent } from '../../store/quests-data/selector';

import { fetchQuest } from '../../store/api-action';
import { store } from '../../store/index';
import { useAppSelector } from '../../hooks';
import { LavelRange, genresRange } from '../../const';
import * as S from './detailed-quest.styled';

function DetailedQuest():JSX.Element {
  const {id:idQuest} = useParams();

  useEffect(() => {
    store.dispatch(fetchQuest(Number(idQuest)));
  }, [idQuest]);

  let levelText = '';
  let genreText = '';

  const questsCatalog = useAppSelector(getCatalog);
  const questCurrent = useAppSelector(getQuestCurrent);

  const [isBookingModalOpened, setIsBookingModalOpened ] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onBookingCloseClick = () => {
    setIsBookingModalOpened(false);
  };

  const questFind = questsCatalog.find((quest) => (quest.id).toString() === idQuest);

  if (questFind === undefined) {
    return <NotFoundPage />;
  }

  const { title, duration, peopleCount, description, level, type, coverImg } = questCurrent;

  if (level!==null && level!==undefined) {
    const levelKey = (level[0].toUpperCase() + level.substring(1));
    levelText = LavelRange[levelKey];
  }

  if (type!==null && type!==undefined) {
    Object.keys(genresRange).forEach((key) => {
      if (type===key) {
        genreText = genresRange[key].name;
      }
    }, genresRange);
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{genreText}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount?.join('-')} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{levelText}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>
            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onBookingCloseClick={onBookingCloseClick}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
