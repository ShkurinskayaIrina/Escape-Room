import { ReactNode } from '../../common/common';
import * as S from './page-heading.styled';

type Props = {
  children?: ReactNode,
}

function PageHeading({ children, ...props }:Props):JSX.Element {
  return (
    <S.PageHeading {...props}>{children}</S.PageHeading>
  );
}

export default PageHeading;
