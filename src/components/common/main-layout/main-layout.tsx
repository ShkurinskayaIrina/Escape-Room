import { ReactNode } from '../../common/common';
import { Header, Footer } from '../../../components/common/common';

type Props = {
  children?: ReactNode,
}

function MainLayout({ children }:Props):JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
