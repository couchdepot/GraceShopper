import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.grey, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.grey, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    color: theme.palette.common.grey,
  },
  inputRoot: {
    color: theme.palette.common.black,
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: 100,
    },
    [theme.breakpoints.up('sm')]: {
      width: 300,
    },
    [theme.breakpoints.up('md')]: {
      width: 500,
    },
    [theme.breakpoints.up('lg')]: {
      width: 800,
    },
    [theme.breakpoints.up('xl')]: {
      width: 1300,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

export default styles;
