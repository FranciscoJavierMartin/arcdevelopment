import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Button,
  useScrollTrigger,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// TODO: Find a 'Theme' definition for Typescript
const useStyles = makeStyles((theme: any) =>
  createStyles({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3em',
    },
    logo: {
      height: '8em',
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    tabContainer: {
      marginLeft: 'auto',
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px',
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',
      height: '45px',
    },
  })
);

const Header = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const classes = useStyles();

  useEffect(() => {
    if (window.location.pathname === '/' && currentTab !== 0) {
      setCurrentTab(0);
    } else if (window.location.pathname === '/services' && currentTab !== 1) {
      setCurrentTab(1);
    } else if (window.location.pathname === '/revolution' && currentTab !== 2) {
      setCurrentTab(2);
    } else if (window.location.pathname === '/about' && currentTab !== 3) {
      setCurrentTab(3);
    } else if (window.location.pathname === '/contact' && currentTab !== 4) {
      setCurrentTab(4);
    }
  }, [currentTab]);

  const handleChange = (e: any, value: number) => {
    setCurrentTab(value);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            {/* FIXME: The image typography is not displayed properly */}
            <Button
              component={Link}
              to='/'
              className={classes.logoContainer}
              disableRipple
              onClick={() => setCurrentTab(0)}
            >
              <img src={logo} alt='company logo' className={classes.logo} />
            </Button>
            <Tabs
              className={classes.tabContainer}
              value={currentTab}
              onChange={handleChange}
              indicatorColor='primary'
            >
              <Tab
                className={classes.tab}
                component={Link}
                to='/'
                label='Home'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/services'
                label='Services'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/revolution'
                label='The Revolution'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/about'
                label='About Us'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/contact'
                label='Contact Us'
              />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
