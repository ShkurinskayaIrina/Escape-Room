import { ThemeProvider } from 'styled-components';

import { Routes, Route, useEffect } from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import HistoryRouter from '../history-route/history-route';
import Home from '../home/home';
import NotFoundPage from '../not-found-page/not-found-page';
import PlugPage from '../plug-page/plug-page';
import Contacts from '../contacts/contacts';

import browserHistory from '../../browser-history';

import { fetchCatalog } from '../../store/api-action';
import { store } from '../../store/index';

import { AppRoute } from '../../const';

import { appTheme } from './common';
import * as S from './app.styled';

function App():JSX.Element {

  useEffect(() => {
    store.dispatch(fetchCatalog());
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.QuestPage} element={<DetailedQuest/>}/>
          <Route path={AppRoute.Contacts} element={<Contacts/>}/>
          <Route path={AppRoute.MainPage} element={<Home/>}/>
          <Route path={AppRoute.PlugPage} element={<PlugPage/>}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </HistoryRouter>
    </ThemeProvider>
  );
}

export default App;
