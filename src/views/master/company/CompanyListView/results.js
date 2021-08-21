import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import {
  getAllMasterCustomer,
  deleteMasterCustomer,
  handleChangeDataComponent
} from "../../../../appRedux/actions/MasterCustomer";
import Swal from 'sweetalert2';

// icon 
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles((theme) => ({
    root: {
      overflowX: 'hidden'
    },
    avatar: {
      marginRight: theme.spacing(2)
    }
  }));

  const results = () => {
      
  }