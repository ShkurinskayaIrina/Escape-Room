import { ReactNode } from '../../common/common';
import * as S from './page-subtext.styled';

type Props = {
  children?: ReactNode,
}

function PageSubtext({ children, ...props }:Props):JSX.Element {
  return (
    <S.PageSubtext {...props}>{children}</S.PageSubtext>
  );
}

export default PageSubtext;
