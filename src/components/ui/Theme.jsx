import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrgange = '#FFBA60';

// FIXME: Fix typescript support because cause problems
export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      organge: arcOrgange,
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrgange
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    }
  }
});