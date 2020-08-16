import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
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
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer} justify='center'>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.link} component={Link} to={HOME_PAGE}>
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
            >
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={CUSTOM_SOFTWARE_PAGE}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={MOBILE_APPS_PAGE}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={WEBSITES_PAGE}
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
            >
              The Revolution
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={REVOLUTION_PAGE}
            >
              Vision
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={REVOLUTION_PAGE}
            >
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={REVOLUTION_PAGE}
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
            >
              About Us
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={ABOUT_PAGE}
            >
              History
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={ABOUT_PAGE}
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
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;
