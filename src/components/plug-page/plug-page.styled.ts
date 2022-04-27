import styled from 'styled-components';
import { Link } from '../common/common';

const Main = styled.main`
  max-width: 556px;
  margin-top: 149px;
  margin-bottom: 149px;
  margin-left: 43.92vw;
`;

const PageContentWrapper = styled.div`
  z-index: 2;
  position: relative;
`;

const PageHeading = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 29px;
`;

const PageTitle = styled.h1`
  margin: 10%;
  padding: 0;

  font-size: ${({ theme }) => theme.font.normall};
  line-height: 95%;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  overflow-wrap: anywhere;
`;

const QuestItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 24px;
  color: #DFCF77;
  font-weight: bold;
  text-decoration: none;
  -webkit-transition: color 0.2s;

  &:hover {
    color: red; }
`;

export {
  Main,
  PageContentWrapper,
  PageHeading,
  PageTitle,
  QuestItemLink,
};
