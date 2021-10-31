import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  makeStyles
} from '@material-ui/core';
// import { Search as SearchIcon } from 'react-feather';
import CompanyForm from '../CompanyForm';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  // ADD CUSTOMER 
  const [addCompanyDialog, setaddCompanyDialog] = useState(false);
  // open add dialog 
  const openDialog = () => {
    setaddCompanyDialog(true);
  }

  
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button className={classes.importButton}>
          Import
        </Button>
        <Button className={classes.exportButton}>
          Export
        </Button>
        <label htmlFor="icon-button-add" onClick={openDialog}>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <AddCircleIcon />
          </IconButton>
        </label>
      </Box>
      {/* 
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      */}
      
      <CompanyForm
        open={addCompanyDialog}
        close={setaddCompanyDialog}
        usage="addition"
        />
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
