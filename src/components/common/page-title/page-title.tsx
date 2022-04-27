import { ReactNode } from '../../common/common';
import * as S from './page-title.styled';

type Props = {
  children?: ReactNode,
}

function PageTitle({ children, ...props }:Props):JSX.Element {
  return (
    <S.PageTitle {...props}>{children}</S.PageTitle>
  );
}

export default PageTitle;
