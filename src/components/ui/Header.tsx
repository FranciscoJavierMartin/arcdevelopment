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
  List,
  ListItem,
  ListItemText,
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
  SERVICES_PAGE,
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

interface IRoute {
  name: string;
  link: string;
  activeIndex: number;
  selectedIndex?: number;
  // mouseOver?: ((event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void);
  mouseOver?: any;
  ariaOwns?: string;
  ariaPopup?: 'true';
}

interface IHeaderProps {
  currentTab: number;
  setCurrentTab: (value: number) => void;
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
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
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
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
    drawer: {
      backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white',
      opacity: 0.7,
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange,
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    drawerIcon: {
      height: '50px',
      width: '50px',
    },
    drawerItemSelected: {
      '& .MuiListItemText-root': {
        opacity: 1,
      },
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1,
    },
  })
);

const Header: React.FC<IHeaderProps> = ({
  currentTab,
  setCurrentTab,
  selectedIndex,
  setSelectedIndex,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = window && /iPad|iPhone|iPod/.test(navigator.userAgent);

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

  const menuOptions: IRoute[] = [
    {
      name: 'Services',
      link: SERVICES_PAGE,
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: 'Custom Software Development',
      link: CUSTOM_SOFTWARE_PAGE,
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Mobile App Development',
      link: MOBILE_APPS_PAGE,
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Website Development',
      link: WEBSITES_PAGE,
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes: IRoute[] = [
    {
      name: 'Home',
      link: HOME_PAGE,
      activeIndex: 0,
    },
    {
      name: 'Services',
      link: SERVICES_PAGE,
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-meny' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: handleClick,
    },
    {
      name: 'The Revolution',
      link: REVOLUTION_PAGE,
      activeIndex: 2,
    },
    {
      name: 'About us',
      link: ABOUT_PAGE,
      activeIndex: 3,
    },
    {
      name: 'Contact',
      link: CONTACT_PAGE,
      activeIndex: 4,
    },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route: IRoute) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (currentTab !== route.activeIndex) {
            setCurrentTab(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [
    currentTab,
    setCurrentTab,
    menuOptions,
    selectedIndex,
    setSelectedIndex,
    routes,
  ]);

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={currentTab}
        onChange={handleChange}
        indicatorColor='primary'
      >
        {routes.map((route: IRoute) => (
          <Tab
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            key={route.name}
          />
        ))}
      </Tabs>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        component={Link}
        to={ESTIMATE_PAGE}
      >
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
        style={{ zIndex: 1302 }}
        keepMounted
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
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route: IRoute) => (
            <ListItem
              onClick={() => {
                setOpenDrawer(false);
                setCurrentTab(route.activeIndex);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={currentTab === route.activeIndex}
              key={route.name}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setCurrentTab(5);
            }}
            divider
            button
            component={Link}
            to={ESTIMATE_PAGE}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            selected={currentTab === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appbar}>
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
