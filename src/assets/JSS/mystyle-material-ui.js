import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { cyan } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
// import ImageLoginPage from '../Image/kebun-teh-bandung-bjbsyariah.jpg';

// CSS General
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  inputLabel: {
    display: "flex",
    flexWrap: "wrap"
  },
  fullField: {
    width: "100%",
  },
  ktpPhoto: {
    width: "100%",
    height: "auto"
  },
  divider: {
    display: "flex",
    justifyContent: "center",
    background: "#800000",
    color: "white"
  },

  tableRoot: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },

  table: {
    minWidth: 700
  },

  cancelButton: {
    '@media(max-width: 800px)': {
      width: "100%",
    },
  }
}));

// Snackbar
const snackBarStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  margin: {
    margin: theme.spacing(1)
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  }
}));

/* ============= DASBHOARD =============*/

// List Item
const drawerWidth = 240;

const dashBoardStyles = makeStyles(theme => ({
  ListItemText: {
    fontSize: "0.7em"
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'linear-gradient(45deg, #800000 30%, #212121 90%)'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  imgLogo: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '110px',
    height: 'auto',
    flexGrow: 1
  },
  imgLogoWraper : {
    display: 'flex',
    justifyContent: 'center'
  }
}));

// Dashboard Layout
const dashboardLayoutStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'linear-gradient(45deg, #800000 30%, #212121 90%)'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  imgLogo: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '110px',
    height: 'auto',
    flexGrow: 1
  },
  imgLogoWraper : {
    display: 'flex',
    justifyContent: 'center'
  }
}));
/* ============= /DASBHOARD =============*/

// Main List Dashboard - Side Nav Bar

// Table Sytles
const updateTableStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  }
});

/* Cell */
const UpdateTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#800000",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

/* Row */
const UpdateTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

/* Pending List Table */
// Pending Table Root
const pendingTableStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  },
  button: {
    margin: theme.spacing(2)
  }
}));

// Cell
const PendingTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#800000",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

/* Row */
const PendingTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

/* ===============LOGIN PAGE======================= */
const LoginPageStyle = theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  // Image
  loginImgLogo: {
    width: "100%",
    maxWidth: "150px",
    height: "auto"
  },
  close: {
    padding: theme.spacing(0.5)
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  margin: {
    margin: theme.spacing(1)
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  fullField: {
    width: "100%"
  },

});
/* ================================================ */

/* ========New Nasabah========== */
const newNasabahStyles = makeStyles(theme => ({
  disdukTxtFld: {
    backgroundColor: "#ffeb3b"
  }
}))
/* ============================= */

/* ========Request New Data Table Cell ========== */

const requestNewDataStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const ViewButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(cyan[500]),
    backgroundColor: cyan[500],
    '&:hover': {
      backgroundColor: cyan[700],
    },
  },
}))(Button);

// Cell
const RequestNewTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#800000",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

// Row
const RequestNewTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);
/* ========/Request New Data Cell ========== */

/* ========Alert Dialog========== */
const AlertDialogStyles = makeStyles({
  dialogContentText: {
    color: "black"
  }
})

/* ========/Alert Dialog========== */


/* ========User Action Dialog========== */
const UserActionDialogStyles = makeStyles({
  dialogContentText: {
    color: "black"
  }
})

/* ========/User Action Dialog========== */


/* ========General Table Styeles ========== */
const generalDataStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  },

  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1)
  },
  paperRoot: {
    padding: theme.spacing(3, 10),
  },

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "150vh",
    height: "80vh",
    '@media(max-width: 800px)': {
      width: "100%",
      maxWidth: "50vh",
      fontSize: 10
    }
  },

}));

// Cell
const GeneralTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "purple",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

// Row
const GeneralTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);
/* ========/General Table Styeles ========== */

/* ========Export Preview Page========== */
// AppBar
const exportPreviewPageStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "yellow"
  },
  btnConvert2Excel: {
    backgroundColor: "#1b5e20",
    borderRadius: "5px",
    border: "1px solid #1b5e20",
    display: "inline-block",
    cursor: "pointer",
    fontSize: 11,
	  textDecoration: "none",
	  textShadow:"0px 1px 0px #2f6627",
    height: 34,
    color: "#ffffff",
    '@media(max-width: 800px)': {
      height: 32,
    },
    '&:hover': {
      backgroundColor: "#2e7d32"
    }
  }
}));
/* ========/Export Preview Page========== */

/* ========About Us Page========== */
const aboutUsStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },

  // this one
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  cover: {
    width: 151,
  },

  // Visi Misi
  paperRoot: {
    padding: theme.spacing(3, 2),
  },
  VMtitle: {
    textAlign: "center"
  },
}));

// Source from : https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/blog/Blog.js
/* ========/About Us Page========== */


/* ========My Profile Page========== */
const myProfileStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "150vh",
    '@media(max-width: 800px)': {
      width: "100%",
      maxWidth: "50vh",
      fontSize: 10
    }
  },
  image: {
    width: "100%",
    maxWidth: "40vh",
    height: "auto",
    '@media(max-width: 800px)': {
      width: "100%",
      maxWidth: "50vh"
    }
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  desktop:{
    '@media(max-width: 800px)': {
      display: "none"
    }
  },

  // Font Color
  scnColor: {
    color: "#757575"
  },

  // Mobile Version
  mobile: {
    display: "none",
    '@media(max-width: 800px)': {
      display: "block"
    }
  }
}));


// Card Style Option
const cardOptionStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "50vh",
    height: ""
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
/* ========/My Profile Page========== */

export {
  useStyles,
  PendingTableCell,
  PendingTableRow,
  pendingTableStyles,
  UpdateTableCell,
  UpdateTableRow,
  updateTableStyles,
  LoginPageStyle,
  dashBoardStyles,
  RequestNewTableRow,
  RequestNewTableCell,
  requestNewDataStyles,
  ViewButton,
  GeneralTableRow,
  GeneralTableCell,
  generalDataStyles,
  snackBarStyles,
  dashboardLayoutStyles,
  AlertDialogStyles,
  exportPreviewPageStyles,
  aboutUsStyles,
  UserActionDialogStyles,
  myProfileStyles,
  cardOptionStyles,
  newNasabahStyles
};
