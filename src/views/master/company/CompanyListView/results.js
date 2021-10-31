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
  getAllMasterCompany,
  deleteMasterCompany,
  handleChangeDataComponent,
  addMasterCompany
} from "../../../../appRedux/actions/MasterCompany";
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


const Results = ({
  className, 
  company,
  mastercompany,
  getAllMasterCompany,
  deleteMasterCompany,
  handleChangeDataComponent,
  ...rest
}) => {
    const classes = useStyles();
    const [selectedCompanyIds, setSelectedCompanyIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    var iconString = "error";
    var generalMessageString = mastercompany.error;

    // token
    var token = sessionStorage.getItem('token');

    // update
    const handleUpdateData = (company) => {
      console.log("UPDATE DATA ===>>> ");
      console.log(company);
      // handleChangeDataComponent(company);
      // openDialog();
    }

    // handle delete data
    const handleDeleteData = (company) => {
      console.log("DELETE DATA ===>>> ");
      console.log(company);
      // handleChangeDataComponent(company);
      // openDialog();
    }

    // on load and keep it load
    useEffect(() => {
      switch(mastercompany.statusCode) {
        case 200:
        case 201:
          iconString = "success";
          generalMessageString = mastercompany.successMessage;
          break;
        default:
          iconString = "error";
          generalMessageString = mastercompany.error;
          break;
      }

      // fetch the data 
      getAllMasterCompany(token, {
        page: 1,
        max_page: 10
      });
    }, []);


    const handleSelectAll = (event) => {
      let newSelectedCompanyIds;
    
      if (event.target.checked) {
        newSelectedCompanyIds = company.map((company) => company.id);
      } else {
        newSelectedCompanyIds = [];
      }
    
      setSelectedCompanyIds(newSelectedCompanyIds);
    };

    const handleSelectOne = (event, id) => {
      const selectedIndex = selectedCompanyIds.indexOf(id);
      let newSelectedCompanyIds = [];
  
      if (selectedIndex === -1) {
        newSelectedCompanyIds = newSelectedCompanyIds.concat(newSelectedCompanyIds, id);
      } else if (selectedIndex === 0) {
        newSelectedCompanyIds = newSelectedCompanyIds.concat(newSelectedCompanyIds.slice(1));
      } else if (selectedIndex === newSelectedCompanyIds.length - 1) {
        newSelectedCompanyIds = newSelectedCompanyIds.concat(newSelectedCompanyIds.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelectedCompanyIds = newSelectedCompanyIds.concat(
          selectedCompanyIds.slice(0, selectedIndex),
          selectedCompanyIds.slice(selectedIndex + 1)
        );
      }
  
      setSelectedCompanyIds(newSelectedCompanyIds);
    };
    
    return mastercompany.loading ? (
      <h2>...loading</h2>
    ) : mastercompany.error ? (
      <h2>{mastercompany.error}</h2>
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
                        checked={selectedCompanyIds.length === company.length}
                        color="primary"
                        indeterminate={
                          selectedCompanyIds.length > 0
                          && selectedCompanyIds.length < company.length
                        }
                        onChange={handleSelectAll}
                      >
                      </Checkbox>
                    </TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Alamat</TableCell>
                    <TableCell>Website</TableCell>
                    <TableCell>PIC</TableCell>
                    <TableCell colSpan={2} align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {typeof mastercompany.data.rows === 'undefined' ? "data rows not available" : mastercompany.data.rows.map((company) => (
                    <TableRow
                      hover
                      key={company.id}
                      selected={selectedCompanyIds.indexOf(company.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedCompanyIds.indexOf(company.id) !== -1}
                          onChange={(event) => handleSelectOne(event, company.id)}
                          value="true"
                        />
                      </TableCell>
                      <TableCell>
                        {company.name}
                      </TableCell>
                      <TableCell>
                        {company.address}
                      </TableCell>
                      <TableCell>
                        {company.website}
                      </TableCell>
                      <TableCell>
                        {company.pic}
                      </TableCell>
                      <TableCell>
                        <label htmlFor="icon-button-update">
                          <IconButton color="primary" aria-label="edit-pelanggan" component="span" onClick={() => handleUpdateData(company)}>
                            <UpdateIcon />
                          </IconButton>
                        </label>
                      </TableCell>
                      <TableCell>
                          <IconButton color="primary" aria-label="delete-pelanggan" component="span" onClick={() => handleDeleteData(company) }>
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
      </Card>
    )
}

Results.propTypes = {
  className: PropTypes.string,
  company: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    mastercompany: state.mastercompany
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllMasterCompany: (token, searchData) => dispatch(getAllMasterCompany(token, searchData)),
    deleteMasterCompany: (token, id) => dispatch(deleteMasterCompany(token, id)),
    handleChangeDataComponent: (company) => dispatch(handleChangeDataComponent(company)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
  