import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import ButtonArrow from '../components/ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

import {
  CUSTOM_SOFTWARE_PAGE,
  MOBILE_APPS_PAGE,
  WEBSITES_PAGE,
} from '../constants/urls';

interface IServicesPageProps {
  setCurrentTab: (value: number) => void;
  setSelectedIndex: (value: number) => void;
}

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: (theme.palette.common as any).orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  learnButton: {
    ...(theme.typography as any).learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

const ServicesPage: React.FC<IServicesPageProps> = ({
  setCurrentTab,
  setSelectedIndex,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}
      >
        <Typography
          align={matchesSM ? 'center' : undefined}
          variant='h2'
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      {/*------ iOS/Android block ------*/}
      <Grid item>
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagment.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              variant='outlined'
              className={classes.learnButton}
              component={Link}
              to={MOBILE_APPS_PAGE}
              onClick={() => {
                setCurrentTab(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 15 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={(theme.palette.common as any).blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt='mobile phone icon'
              src={mobileAppsIcon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      {/*------- End iOS/Android block--------*/}
      {/*------ Custom Software Service block ------*/}
      <Grid item>
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              variant='outlined'
              className={classes.learnButton}
              component={Link}
              to={CUSTOM_SOFTWARE_PAGE}
              onClick={() => {
                setCurrentTab(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 15 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={(theme.palette.common as any).blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt='custom software icon'
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*------ End Custon software block ------*/}
      {/*------ Websites block ------*/}
      <Grid item>
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>Websites Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              variant='outlined'
              className={classes.learnButton}
              component={Link}
              to={WEBSITES_PAGE}
              onClick={() => {
                setCurrentTab(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 15 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={(theme.palette.common as any).blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt='website icon'
              src={websitesIcon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      {/*------ End Websites block ------*/}
    </Grid>
  );
};

export default ServicesPage;
