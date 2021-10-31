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

// form
import CustomerForm from '../CustomerForm';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden'
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ 
  className, 
  customers, 
  mastercustomer,
  getAllMasterCustomer,
  deleteMasterCustomer,
  handleChangeDataComponent,
  ...rest
}) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  var iconString = "error";
  var generalMessageString = mastercustomer.error;
  // token
  var token = sessionStorage.getItem('token');

  // useEffect 
  useEffect(() => {    

    switch(mastercustomer.statusCode) {
      case 200:
      case 201:
        iconString = "success";
        generalMessageString = mastercustomer.successMessage;
        break;
      default:
        iconString = "error";
        generalMessageString = mastercustomer.error;
        break;
    }

    if(mastercustomer.deleteNotif) {
      Swal.fire({
          icon: iconString,
          text: generalMessageString,
          title: iconString
      }); 
    }

    if(mastercustomer.addNotif) {
      Swal.fire({
          icon: iconString,
          text: generalMessageString,
          title: iconString
      }); 
    }

    if(mastercustomer.updateNotif) {
      Swal.fire({
        icon: iconString,
        text: generalMessageString,
        title: iconString
    }); 
    }

    getAllMasterCustomer(token, {
      page: 1,
      max_page: 10
    });

  }, [
    mastercustomer.deleteNotif,
    mastercustomer.addNotif,
    mastercustomer.updateNotif
  ]);
  
  
  
  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    console.log("You chose : ");
    console.log(event.target.value);
    getAllMasterCustomer(token, {
      page: 1,
      max_page: Number(event.target.value)
    });

    setLimit(event.target.value);
  };

  const handlePageChange = (event, value) => {
    console.log("New page bro : ");
    console.log(value);
    let newPage = Number(value) + 1;
    getAllMasterCustomer(token, {
      page: Number(newPage),
      max_page: limit
    });
    setPage(value);
  };

  // handle delete 
  const handleDeleteData = (customer) => {
    Swal.fire({
      title: 'Delete Data',
      text: `Are you sure will delete the data : ${customer.name} ?`,
      icon: "warning",
      showConfirmButton:true,
      confirmButtonText: 'Yes, delete it!',
      showCancelButton:true,
      cancelButtonText:"No, cancel"
    })
      .then((willDeleteData) => {
        
        if(willDeleteData.isConfirmed) {
          // token = "aaa";
          deleteMasterCustomer(token, customer.id);     
        }
      })
  }

  // handle update
  // ADD CUSTOMER 
  const [updateCustomerDialog, setupdateCustomerDialog] = useState(false);
  // open add dialog 
  const openDialog = () => {
    setupdateCustomerDialog(true);
  }

  // update
  const handleUpdateData = (customer) => {
    console.log("UPDATE DATA ===>>> ");
    console.log(customer);
    handleChangeDataComponent(customer);
    openDialog();
  }

  // token
  var token = sessionStorage.getItem('token');


  return mastercustomer.loading ? (
    <h2>...loading</h2>
  ) : mastercustomer.error ? (
    <h2>{mastercustomer.error}</h2>
  ) : (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Nama
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Alamat
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Kota
                </TableCell>
                <TableCell>
                  Gender
                </TableCell>   
                <TableCell colSpan={2} align="center">
                  Action
                </TableCell>                
              </TableRow>
            </TableHead>       
            <TableBody>
              {typeof mastercustomer.data.rows === 'undefined' ? "data rows not available" : mastercustomer.data.rows.map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={customer.avatarUrl}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {`${customer.address}`}
                  </TableCell>
                  <TableCell>
                    {customer.phone}
                  </TableCell>
                  <TableCell>
                    {customer.city}
                  </TableCell>
                  <TableCell>
                    {customer.sex}
                  </TableCell>
                  <TableCell>
                    <label htmlFor="icon-button-update">
                      <IconButton color="primary" aria-label="edit-pelanggan" component="span" onClick={() => handleUpdateData(customer)}>
                        <UpdateIcon />
                      </IconButton>
                    </label>
                  </TableCell>
                  <TableCell>
                      <IconButton color="primary" aria-label="delete-pelanggan" component="span" onClick={() => handleDeleteData(customer) }>
                            <DeleteIcon                                                     
                            />
                      </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={typeof mastercustomer === 'undefined' ? 0 : mastercustomer.data.total_data}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={typeof mastercustomer === 'undefined' ? 0 : mastercustomer.data.max_page}
        rowsPerPageOptions={[5, 10, 25]}
        className={clsx(classes.root, className)}
      />

      <CustomerForm
        open={updateCustomerDialog}
        close={setupdateCustomerDialog}
        usage="update"
        />
    </Card>    
      
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    mastercustomer: state.mastercustomer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllMasterCustomer: (token, searchData) => dispatch(getAllMasterCustomer(token, searchData)),
    deleteMasterCustomer: (token, id) => dispatch(deleteMasterCustomer(token, id)),
    handleChangeDataComponent: (customer) => dispatch(handleChangeDataComponent(customer))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
