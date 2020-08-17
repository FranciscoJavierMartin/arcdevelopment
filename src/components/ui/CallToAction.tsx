import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import ButtonArrow from './ButtonArrow';
import { ESTIMATE_PAGE , REVOLUTION_PAGE} from '../../constants/urls';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

interface ICallToActionProps {
  setCurrentTab: (value: number) => void;
}

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...(theme.typography as any).learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...(theme.typography as any).estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: (theme.palette.common as any).orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const CallToAction: React.FC<ICallToActionProps> = ({ setCurrentTab }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      alignItems='center'
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.
              <br />
              Revolutionary Results
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container item justify={matchesSM ? 'center' : undefined}>
              <Button
                variant='outlined'
                className={classes.learnButton}
                onClick={() => setCurrentTab(2)}
                component={Link}
                to={REVOLUTION_PAGE}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={(theme.palette.common as any).blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          className={classes.estimateButton}
          component={Link}
          to={ESTIMATE_PAGE}
          onClick={() => setCurrentTab(5)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
