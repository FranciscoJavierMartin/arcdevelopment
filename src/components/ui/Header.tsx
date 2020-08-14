import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  SwipeableDrawer,
  useScrollTrigger,
  useMediaQuery,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg';
import {
  CUSTOM_SOFTWARE_PAGE,
  MOBILE_APPS_PAGE,
  WEBSITES_PAGE,
  SERVICES_PAGES,
  HOME_PAGE,
  REVOLUTION_PAGE,
  ABOUT_PAGE,
  CONTACT_PAGE,
  ESTIMATE_PAGE,
} from '../../constants/urls';

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
      [theme.breakpoints.down('md')]: {
        marginBottom: '2em',
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: '1.25em',
      },
    },
    logo: {
      height: '8em',
      [theme.breakpoints.down('md')]: {
        height: '7em',
      },
      [theme.breakpoints.down('xs')]: {
        height: '5.5em',
      },
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
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: 'white',
      borderRadius: '0px',
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 1,
      },
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
      }
    },
    drawerIcon: {
      height: '50px',
      width: '50px'
    }
  })
);

const Header = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const iOS = window && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const menuOptions = [
    {
      name: 'Services',
      link: SERVICES_PAGES,
    },
    {
      name: 'Custom Software Development',
      link: CUSTOM_SOFTWARE_PAGE,
    },
    {
      name: 'Mobile App Development',
      link: MOBILE_APPS_PAGE,
    },
    {
      name: 'Website Development',
      link: WEBSITES_PAGE,
    },
  ];
  useEffect(() => {
    switch (window.location.pathname) {
      case HOME_PAGE:
        if (currentTab !== 0) {
          setCurrentTab(0);
        }
        break;

      case SERVICES_PAGES:
        if (currentTab !== 1) {
          setCurrentTab(1);
          setSelectedIndex(0);
        }
        break;
      case CUSTOM_SOFTWARE_PAGE:
        if (currentTab !== 1) {
          setCurrentTab(1);
          setSelectedIndex(1);
        }
        break;
      case MOBILE_APPS_PAGE:
        if (currentTab !== 1) {
          setCurrentTab(1);
          setSelectedIndex(2);
        }
        break;
      case WEBSITES_PAGE:
        if (currentTab !== 1) {
          setCurrentTab(1);
          setSelectedIndex(3);
        }
        break;
      case REVOLUTION_PAGE:
        if (currentTab !== 2) {
          setCurrentTab(2);
        }
        break;
      case ABOUT_PAGE:
        if (currentTab !== 3) {
          setCurrentTab(3);
        }
        break;
      case CONTACT_PAGE:
        if (currentTab !== 4) {
          setCurrentTab(4);
        }
        break;
      case ESTIMATE_PAGE:
        if (currentTab !== 5) {
          setCurrentTab(5);
        }
        break;
      default:
        break;
    }
  }, [currentTab]);

  const handleChange = (e: any, value: number) => {
    setCurrentTab(value);
  };

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e: any, i: number) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e: any) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={currentTab}
        onChange={handleChange}
        indicatorColor='primary'
      >
        <Tab className={classes.tab} component={Link} to='/' label='Home' />
        <Tab
          aria-owns={anchorEl ? 'simple-meny' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={handleClick}
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
      <Button variant='contained' color='secondary' className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((menuOption, index: number) => (
          <MenuItem
            onClick={(event: any) => {
              handleMenuItemClick(event, index);
              setCurrentTab(1);
            }}
            component={Link}
            to={menuOption.link}
            classes={{ root: classes.menuItem }}
            key={menuOption.name}
            selected={index === selectedIndex && currentTab === 1}
          >
            {menuOption.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        Example drawer
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
