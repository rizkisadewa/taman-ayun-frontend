import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {
    addMasterCompany, masterCompanyDataComponentEmpty, updateMasterCompany
} from "../../../../appRedux/actions/MasterCompany";
import swal from 'sweetalert';
import { connect } from 'react-redux';

// Import JSS
import { useStyles } from "../../../../assets/JSS/mystyle-material-ui";
import { handleChangeDataComponent } from 'src/appRedux/actions';

const CompanyForm = (props) => {
    // Make an object JSS
    const classes = useStyles();

    const clearFormAndClose = () => {
        props.masterCompanyDataComponentEmpty();
        props.close();
    }    

    // Handle Change TextField
    const handleChange = name => event => {
        props.handleChangeDataComponent({ ...props.mastercompany.dataComponent, [name]: event.target.value });
    };

    // Handle Box Change
    const handleBoxChange = name => event => { 
        props.handleChangeDataComponent({ 
            ...props.mastercompany.dataComponent, 
            [name]: event.target.value 
        });
    };

    // token
    var token = sessionStorage.getItem('token');

    const onSubmit = () => {
        swal({
            title: "Apakah sudah yakin?",
            text: "Data akan tersimpan, cek kembali jika belum yakin.",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
        .then((willAddData) => {
            if(willAddData) {

                if(props.usage === 'addition') {
                    props.addMasterCompany(token, props.mastercompany.dataComponent)
                } else {
                    props.updateMasterCompany(token, props.mastercompany.dataComponent.id, props.mastercompany.dataComponent)
                }

            } else {
                props.close();
            }
        });
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={clearFormAndClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* Header */}
                <DialogTitle id="scroll-dialog-title">{props.usage === "addition" ? "Adding Company" : "Update Company"}</DialogTitle>
                
                {/* Body */}
                <DialogContent>
                    <Grid container spacing={1}>
                        {/* Company Name */}
                        <Grid item xs={12} sm={12} lg={12}>
                            <TextField
                                id="outlined-name"
                                label="Nama Instansi"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={props.mastercompany.dataComponent.name}
                                onChange={handleChange("name")}
                            />
                        </Grid>

                        {/* Company Address */}
                        <Grid item xs={12} sm={12} lg={12}>
                            <TextField
                                id="outlined-name"
                                label="Alamat Instansi"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={props.mastercompany.dataComponent.address}
                                onChange={handleChange("address")}
                            />
                        </Grid>

                        {/* Company Website */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <TextField
                                id="outlined-name"
                                label="Website Instansi"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={props.mastercompany.dataComponent.website}
                                onChange={handleChange("website")}
                            />
                        </Grid>

                        {/* Company PIC */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <TextField
                                id="outlined-name"
                                label="PIC Instansi"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={props.mastercompany.dataComponent.pic}
                                onChange={handleChange("pic")}
                            />
                        </Grid>

                    </Grid>
                </DialogContent>                

                {/* Footer */}
                <DialogActions>
                    <Button onClick={clearFormAndClose} color="secondary">
                        Batal
                    </Button>
                    <Button  onClick={onSubmit} color="primary" autoFocus>
                        {props.usage === "addition" ? "Tambah Instansi" : "Edit Insansi"}
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
    
    // Finish funciton
}


const mapStateToProps = state => {
    return {
        mastercompany: state.mastercompany
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        addMasterCompany: (token, masterCompanyData) => dispatch(addMasterCompany(token, masterCompanyData)),
        handleChangeDataComponent: (company) => dispatch(handleChangeDataComponent(company)),
        masterCompanyDataComponentEmpty: () => dispatch(masterCompanyDataComponentEmpty()),
        updateMasterCompany: (token, id, updatedCompanyData) => dispatch(updateMasterCompany(token, id, updatedCompanyData))
    }
}

export default connect(
    mapStateToProps,
    mapDisaptchToProps
)(CompanyForm);
