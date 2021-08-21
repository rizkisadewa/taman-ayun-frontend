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
import { connect } from 'react-redux';
import {
    addMasterCustomer,
    updateMasterCustomer,
    handleChangeDataComponent,
    masterCustomerDataComponentEmpty
} from "../../../../appRedux/actions/MasterCustomer";
import swal from 'sweetalert';

// Import JSS
import { useStyles } from "../../../../assets/JSS/mystyle-material-ui";

const CustomerForm = (props) => {
    // const [files, setFiles] = useState([]);

    // Make an object JSS
    const classes = useStyles();

    const clearFormAndClose = () => {
        props.masterCustomerDataComponentEmpty();
        props.close();
    }    

    // Handle Change TextField
    const handleChange = name => event => {
        props.handleChangeDataComponent({ ...props.mastercustomer.dataComponent, [name]: event.target.value });
    };

    // Handle Box Change
    const handleBoxChange = name => event => { 
        props.handleChangeDataComponent({ 
            ...props.mastercustomer.dataComponent, 
            [name]: event.target.value 
        });
    };



    // files manipulate
    // Handle File Upload
    // const handleFile = files => {
    //     // console.log(files);
    //     setFiles(files);
    //     console.log(files);
    // };

    // Handle Date Change
    // const handleDateChange = name => date => {
    //     props.handleChangeTextField({ ...props.mastercustomer.dataComponent, [name]: date ? date.toJSON() : date });
    // };

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

                if(props.usage === "addition") {
                    props.addMasterCustomer(token, props.mastercustomer.dataComponent)
                } else {
                    props.updateMasterCustomer(token, props.mastercustomer.dataComponent.id, props.mastercustomer.dataComponent);
                }
                
                props.close(); 
            } else {
                props.close();
            }
                   
        });
    }
    
    return(
        <div>
            <Dialog
                open={props.open}
                onClose={clearFormAndClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{props.usage === "addition" ? "Adding Customer" : "Update Customer"}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        {/* Upload Photo */}
                        {/*
                        <Grid item xs={12} md={12} lg={12}>
                        <Container>
                            <DropzoneArea
                            acceptedFiles={["image/*"]}
                            filesLimit={1}
                            maxFileSize={10000000}
                            dropzoneText="Seret atau Klik untuk mengunggah foto Profile"
                            onChange={handleFile}
                            />
                        </Container>
                        </Grid>
                        */}
                        
                        {/* Nama Pelanggan */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <TextField
                                id="outlined-name"
                                label="Nama Pelanggan"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={props.mastercustomer.dataComponent.name}
                                onChange={handleChange("name")}
                            />
                        </Grid>

                        {/* Address */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <TextField
                                id="outlined-address"
                                label="Alamat"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={props.mastercustomer.dataComponent.address}
                                onChange={handleChange("address")}
                            />
                        </Grid>

                        
                        {/* Jenis Kelamin */}
                        <Grid item xs={12} md={12} lg={6}>
                            <FormControl className={(classes.FormControl, classes.fullField)}>
                                <InputLabel htmlFor="sex">Jenis Kelamin</InputLabel>
                                <Select
                                    value={!props.mastercustomer.dataComponent.sex ? "L" : props.mastercustomer.dataComponent.sex}
                                    onChange={handleBoxChange("sex")}
                                    inputProps={{
                                        name: "sex",
                                        id: "sex-id"
                                    }}
                                >
                                    <MenuItem value="P" key="P">Perempuan</MenuItem>
                                    <MenuItem selected={true} value="L" key="L">Laki - laki</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <TextField
                                id="outlined-email-address"
                                label="Email"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={props.mastercustomer.dataComponent.email}
                                onChange={handleChange("email")}
                            />
                        </Grid>

                        {/* phone */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <TextField
                                id="outlined-phone"
                                label="No. Telp"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={props.mastercustomer.dataComponent.phone}
                                onChange={handleChange("phone")}
                            />
                        </Grid>

                        {/* Kota */}
                        <Grid item xs={12} md={12} lg={6}>
                            <FormControl className={(classes.FormControl, classes.fullField)}>
                                <InputLabel htmlFor="city">Kota</InputLabel>
                                <Select
                                value={props.mastercustomer.dataComponent.city}
                                onChange={handleBoxChange("city")}
                                inputProps={{
                                    name: "city",
                                    id: "city-id"
                                }}
                                >
                                    <MenuItem value="Bandung" key="Bandung">Bandung</MenuItem>
                                    <MenuItem value="Tasik" key="Tasik">Tasik</MenuItem>
                                    <MenuItem value="Lombok" key="Lombok">Lombok</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>    
                    </Grid>                

                </DialogContent>

                <DialogActions>
                    <Button onClick={clearFormAndClose} color="secondary">
                        Batal
                    </Button>
                    <Button  onClick={onSubmit} color="primary" autoFocus>
                        {props.usage === "addition" ? "Tambah Pelanggan" : "Edit Pelanggan"}
                    </Button>
                </DialogActions>
                
            </Dialog>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mastercustomer: state.mastercustomer
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        addMasterCustomer: (token, masterCustomerData) => dispatch(addMasterCustomer(token, masterCustomerData)),
        handleChangeDataComponent: (customer) => dispatch(handleChangeDataComponent(customer)),
        masterCustomerDataComponentEmpty: () => dispatch(masterCustomerDataComponentEmpty()),
        updateMasterCustomer: (token, id, updatedCustomerData) => dispatch(updateMasterCustomer(token, id, updatedCustomerData))
    }
}

export default connect(
    mapStateToProps,
    mapDisaptchToProps
)(CustomerForm);