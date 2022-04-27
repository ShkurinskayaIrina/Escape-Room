import * as S from './plug-page.styled';
import { MainLayout } from '../common/common'
import { AppRoute } from '../../const';

function PlugPage():JSX.Element {
  return (
    <MainLayout>
      <S.Main>
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>Страница в разработке</S.PageTitle>
          </S.PageHeading>
          <S.QuestItemLink to={AppRoute.MainPage}>Вернуться на главную</S.QuestItemLink>
        </S.PageContentWrapper>
      </S.Main>
    </MainLayout>
  )
}

export default PlugPage;
