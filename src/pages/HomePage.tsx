import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import {
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ButtonArrow from '../components/ui/ButtonArrow';
import CallToAction from '../components/ui/CallToAction';

import {
  ESTIMATE_PAGE,
  REVOLUTION_PAGE,
  CUSTOM_SOFTWARE_PAGE,
  MOBILE_APPS_PAGE,
  WEBSITES_PAGE,
  CONTACT_PAGE,
  ABOUT_PAGE,
} from '../constants/urls';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

interface IHomePageProps {
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 30,
    },
  },
  estimateButton: {
    ...(theme.typography as any).estimate,
    backgroundColor: (theme.palette.common as any).orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...(theme.typography as any).learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
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
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      maringTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      maringTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '80em',
    width: '100%',
  },
}));

const HomePage: React.FC<IHomePageProps> = ({
  setCurrentTab,
  setSelectedIndex,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      {/*------ Hero block ------*/}
      <Grid item>
        <Grid container direction='row' justify='flex-end' alignItems='center'>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align='center' variant='h2'>
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  className={classes.estimateButton}
                  variant='contained'
                  component={Link}
                  to={ESTIMATE_PAGE}
                  onClick={() => setCurrentTab(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={(theme.palette.common as any).blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      {/*------ End Hero block ------*/}
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
      {/*------ iOS/Android block ------*/}
      <Grid item>
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
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
            />
          </Grid>
        </Grid>
      </Grid>
      {/*------- End iOS/Android block--------*/}
      {/*------ Websites block ------*/}
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
          <Grid item>
            <img
              className={classes.icon}
              alt='website icon'
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*------ End Websites block ------*/}
      {/*------ The Revolution block ------*/}
      <Grid item>
        <Grid
          container
          alignItems='center'
          justify='center'
          style={{ height: '100em', marginTop: '12em' }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    className={classes.learnButtonHero}
                    variant='outlined'
                    component={Link}
                    to={REVOLUTION_PAGE}
                    onClick={() => setCurrentTab(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={(theme.palette.common as any).blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/*------ End The Revolution block ------*/}
      {/*------ Information block ------*/}
      <Grid
        container
        direction='row'
        alignItems='center'
        className={classes.infoBackground}
      >
        <Grid
          item
          container
          style={{
            position: 'absolute',
            textAlign: matchesXS ? 'center' : 'inherit',
          }}
          direction={matchesXS ? 'column' : 'row'}
          spacing={matchesXS ? 10 : 0}
        >
          <Grid
            item
            sm
            style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
          >
            <Grid
              container
              direction='column'
              style={{ marginBottom: matchesXS ? '10em' : 0 }}
            >
              <Typography variant='h2' style={{ color: 'white' }}>
                About Us
              </Typography>
              <Typography variant='subtitle2'>Let's get personal.</Typography>
              <Grid item>
                <Button
                  variant='outlined'
                  className={classes.learnButton}
                  style={{ color: 'white', borderColor: 'white' }}
                  component={Link}
                  to={ABOUT_PAGE}
                  onClick={() => setCurrentTab(3)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill='white' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            style={{
              marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
              textAlign: matchesXS ? 'center' : 'right',
            }}
          >
            <Grid container direction='column'>
              <Typography variant='h2' style={{ color: 'white' }}>
                Contact Us
              </Typography>
              <Typography variant='subtitle2'>Say hello!</Typography>
              <Grid item>
                <Button
                  variant='outlined'
                  className={classes.learnButton}
                  style={{ color: 'white', borderColor: 'white' }}
                  component={Link}
                  to={CONTACT_PAGE}
                  onClick={() => setCurrentTab(4)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill='white' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*------ End Information block ------*/}
      {/*------ Call to action block ------*/}
      <Grid item>
        <CallToAction setCurrentTab={setCurrentTab} />
      </Grid>
      {/*------ End Call to action block ------*/}
    </Grid>
  );
};

export default HomePage;
