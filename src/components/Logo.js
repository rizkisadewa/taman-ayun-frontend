import React from 'react';
import {useStyles} from './TopBarStyles';

const Logo = (props) => {
  const classes = useStyles();

  return (
    <img
      alt="Logo"
      className={classes.logo}
      src="/static/Jepunku_Logo_Fixed-nobg_white.png"
      {...props}
    />
  );
};

export default Logo;
