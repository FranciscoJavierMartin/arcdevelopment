import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  HOME_PAGE,
  SERVICES_PAGE,
  CUSTOM_SOFTWARE_PAGE,
  MOBILE_APPS_PAGE,
  WEBSITES_PAGE,
  REVOLUTION_PAGE,
  ABOUT_PAGE,
  CONTACT_PAGE,
} from '../../constants/urls';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

interface IFooterProps {
  setCurrentTab: (value: number) => void;
  setSelectedIndex: (value: number) => void;
}

const useStyles = makeStyles((theme: any) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer: React.FC<IFooterProps> = ({
  setCurrentTab,
  setSelectedIndex,
}) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.mainContainer} justify='center'>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={HOME_PAGE}
                onClick={() => setCurrentTab(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={SERVICES_PAGE}
                onClick={() => {
                  setCurrentTab(1);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={CUSTOM_SOFTWARE_PAGE}
                onClick={() => {
                  setCurrentTab(1);
                  setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={MOBILE_APPS_PAGE}
                onClick={() => {
                  setCurrentTab(1);
                  setSelectedIndex(2);
                }}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={WEBSITES_PAGE}
                onClick={() => {
                  setCurrentTab(1);
                  setSelectedIndex(3);
                }}
              >
                Websites Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={REVOLUTION_PAGE}
                onClick={() => setCurrentTab(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={REVOLUTION_PAGE}
                onClick={() => setCurrentTab(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={REVOLUTION_PAGE}
                onClick={() => setCurrentTab(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={REVOLUTION_PAGE}
                onClick={() => setCurrentTab(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={ABOUT_PAGE}
                onClick={() => setCurrentTab(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={ABOUT_PAGE}
                onClick={() => setCurrentTab(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={ABOUT_PAGE}
                onClick={() => setCurrentTab(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={CONTACT_PAGE}
                onClick={() => setCurrentTab(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />

      <Grid
        container
        justify='flex-end'
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href='https://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='facebook logo' src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='twitter logo' src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='instagram logo' src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
