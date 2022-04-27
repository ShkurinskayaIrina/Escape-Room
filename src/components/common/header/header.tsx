import logo from '../../../assets/img/logo.svg';
import { AppRoute } from '../../../const';
import * as S from './header.styled';

function Header():JSX.Element {

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link to={AppRoute.MainPage} $isActiveLink >
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to={AppRoute.PlugPage}>Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to={AppRoute.PlugPage}>Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to={AppRoute.PlugPage}>Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to={AppRoute.Contacts}>Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
