import React, { useState } from 'react';
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
import { DropzoneArea } from "material-ui-dropzone";
import Container from "@material-ui/core/Container";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns";

// Import JSS
import { useStyles, newNasabahStyles } from "../../../assets/JSS/mystyle-material-ui";

export default function CustomerAdd (props) {
    const [files, setFiles] = useState([]);

    // Make an object JSS
    const classes = useStyles();
    const classes2 = newNasabahStyles();
    

    const [customer, setCustomer] = useState({
        city: "",
        gender: "",
        email: "",
        name: "",
        phone: "",
        address: "",
        bod: null,
        pod: ""
    });

    const clearFormAndClose = () => {
        setCustomer({
            city: "",
            gender: "",
            email: "",
            name: "",
            phone: "",
            address: ""
        });
        props.close();
    }

    // Handle Change TextField
    const handleChange = name => event => {
        setCustomer({ ...customer, [name]: event.target.value });
    };

    // Handle Box Change
    const handleBoxChange = event => {
        setCustomer(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value
        }));
    };

    // files manipulate
    // Handle File Upload
    const handleFile = files => {
        // console.log(files);
        setFiles(files);
    };

    // Handle Date Change
    const handleDateChange = name => date => {
        setCustomer({ ...customer, [name]: date ? date.toJSON() : date });
    };
    
    return(
        <div>
            <Dialog
                open={props.open}
                onClose={clearFormAndClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Tambah Pelanggan</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        {/* Upload Photo */}
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
                        
                        {/* Nama Pelanggan */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <TextField
                                id="outlined-name"
                                label="Nama Pelanggan"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={customer.name}
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
                                value={customer.address}
                                onChange={handleChange("address")}
                            />
                        </Grid>

                        {/* Kota */}
                        <Grid item xs={12} md={12} lg={6}>
                            <FormControl className={(classes.FormControl, classes.fullField)}>
                                <InputLabel htmlFor="city">Kota</InputLabel>
                                <Select
                                value={customer.city}
                                onChange={handleBoxChange}
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

                        {/* Jenis Kelamin */}
                        <Grid item xs={12} md={12} lg={6}>
                            <FormControl className={(classes.FormControl, classes.fullField)}>
                                <InputLabel htmlFor="gender">Jenis Kelamin</InputLabel>
                                <Select
                                    value={customer.gender}
                                    onChange={handleBoxChange}
                                    inputProps={{
                                        name: "gender",
                                        id: "gender-id"
                                    }}
                                >
                                    <MenuItem value="P" key="P">Perempuan</MenuItem>
                                    <MenuItem value="L" key="L">Laki - laki</MenuItem>
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
                                value={customer.email}
                                onChange={handleChange("email")}
                            />
                        </Grid>

                        {/* phone */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <TextField
                                id="outlined-email-address"
                                label="No. Telp"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={customer.phone}
                                onChange={handleChange("phone")}
                            />
                        </Grid>

                        {/* Tanggal Lahir */}
                        <Grid item xs={12} md={12} lg={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="dense"
                                id="date-picker-inline-bod"
                                label="Tanggal Lahir"
                                onChange={handleDateChange("bod")}
                                value={customer.bod}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                                className={classes.fullField}
                            />
                        </MuiPickersUtilsProvider>
                        </Grid>

                        {/* Tempat Lahir */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <TextField
                                id="outlined-pod"
                                label="Tempat Lahir"
                                className={(classes.textField, classes.fullField)}
                                margin="dense"
                                variant="outlined"
                                value={customer.pod}
                                onChange={handleChange("pod")}
                            />
                        </Grid>
                        
                    </Grid>                

                </DialogContent>

                <DialogActions>
                    <Button onClick={clearFormAndClose} color="secondary">
                        Batal
                    </Button>
                    <Button color="primary" autoFocus>
                        Tambah Pelanggan
                    </Button>
                </DialogActions>
                
            </Dialog>
        </div>
    )
}