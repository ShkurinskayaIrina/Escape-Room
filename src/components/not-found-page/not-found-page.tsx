import * as S from './not-found-page.styled';
import { MainLayout } from '../../components/common/common'
import { AppRoute } from '../../const';

function NotFoundPage():JSX.Element {
  return (
    <MainLayout>
      <S.Main>
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>404 :( Такой страницы не существует</S.PageTitle>
          </S.PageHeading>
          <S.QuestItemLink to={AppRoute.MainPage}>Вернуться на главную</S.QuestItemLink>
        </S.PageContentWrapper>
      </S.Main>
    </MainLayout>
  )
}

export default NotFoundPage;
