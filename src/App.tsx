import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './components/ui/Theme';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import {
  HOME_PAGE,
  SERVICES_PAGE,
  CUSTOM_SOFTWARE_PAGE,
  MOBILE_APPS_PAGE,
  WEBSITES_PAGE,
  REVOLUTION_PAGE,
  ABOUT_PAGE,
  CONTACT_PAGE,
  ESTIMATE_PAGE,
} from './constants/urls';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CustomSoftwarePage from './pages/CustomSoftwarePage';
import MobileAppsPage from './pages/MobileAppsPage';
import WebsitesPage from './pages/WebsitesPage';
import RevolutionPage from './pages/RevolutionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EstimatePage from './pages/EstimatePage';

const baseURL =
  process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '';

function App() {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={`${baseURL}/`}>
        <Header
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path={HOME_PAGE}
            render={(props) => (
              <HomePage
                {...props}
                setCurrentTab={setCurrentTab}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path={SERVICES_PAGE}
            render={(props) => (
              <ServicesPage
                {...props}
                setCurrentTab={setCurrentTab}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path={CUSTOM_SOFTWARE_PAGE}
            render={(props) => (
              <CustomSoftwarePage
                {...props}
                setCurrentTab={setCurrentTab}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path={MOBILE_APPS_PAGE}
            render={(props) => (
              <MobileAppsPage
                {...props}
                setCurrentTab={setCurrentTab}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path={WEBSITES_PAGE}
            render={(props) => (
              <WebsitesPage
                {...props}
                setCurrentTab={setCurrentTab}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path={REVOLUTION_PAGE}
            render={(props) => (
              <RevolutionPage {...props} setCurrentTab={setCurrentTab} />
            )}
          />
          <Route
            exact
            path={ABOUT_PAGE}
            render={(props) => (
              <AboutPage {...props} setCurrentTab={setCurrentTab} />
            )}
          />
          <Route
            exact
            path={CONTACT_PAGE}
            render={(props) => (
              <ContactPage {...props} setCurrentTab={setCurrentTab} />
            )}
          />
          <Route
            exact
            path={ESTIMATE_PAGE}
            render={(props) => (
              <EstimatePage
                {...props}
                setCurrentTab={setCurrentTab}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
        </Switch>
        <Footer
          setCurrentTab={setCurrentTab}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
