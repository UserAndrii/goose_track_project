// import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import MainLayout from './MainLayout/MainLayout';
import TemporaryNavigation from '../TemporaryNavigation';

import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import AccountPage from 'pages/AccountPage';
import CalendarPage from 'pages/CalendarPage';
import StatisticsPage from 'pages/StatisticsPage';

// const MainPage = lazy(() => import('pages/MainPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const AccountPage = lazy(() => import('pages/AccountPage'));
// const CalendarPage = lazy(() => import('pages/CalendarPage'));
// const StatisticsPage = lazy(() => import('pages/StatisticsPage'));

export const App = () => {
  return (
    <>
      {/* <TemporaryNavigation /> */}
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        {/* <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              navigateTo="/calendar"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} navigateTo="/calendar" />
          }
        />

        <Route path="/" element={<MainLayout />}>
          <Route
            path="account"
            element={
              <PrivateRoute component={<AccountPage />} navigateTo="/login" />
            }
          />

          <Route
            path="calendar"
            element={
              <PrivateRoute component={<CalendarPage />} navigateTo="/login" />
            }
          />

          <Route
            path="statistics"
            element={
              <PrivateRoute
                component={<StatisticsPage />}
                navigateTo="/login"
              />
            }
          />
        </Route>

        <Route
          path="*"
          element={<RestrictedRoute component={<MainPage />} navigateTo="/" />} */}
        {/* /> */}
      </Routes>
    </>
  );
};

function RestrictedRoute({ component, navigateTo = '/' }) {
  const isLogged = false;
  return isLogged ? <Navigate to={navigateTo} /> : component;
}

function PrivateRoute({ component, navigateTo = '/' }) {
  const isLogged = true;
  return !isLogged ? <Navigate to={navigateTo} /> : component;
}
