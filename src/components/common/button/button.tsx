import { ReactNode } from '../../common/common';
import * as S from './button.styled';

type Props = {
  children?: ReactNode,
  onClick?: ()=>void,
}

function Button({ children, ...props }:Props):JSX.Element {
  return (
    <S.Button {...props}>{children}</S.Button>
  );
}

export default Button;
