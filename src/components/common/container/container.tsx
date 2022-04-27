import { ReactNode } from '../../common/common';
import * as S from './container.styled';

type Props = {
  children?: ReactNode,
}

function Container({ children, ...props }:Props): JSX.Element {
  return (
    <S.Container {...props}>{children}</S.Container>
  );
}

export default Container;
