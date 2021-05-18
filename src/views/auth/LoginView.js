import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { useDispatch } from 'react-redux';
import {userSignIn} from "../../appRedux/actions/Auth";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    backgroundImage:  `url(${"static/images/login_page/login-page-taman-ayun.png"})`
  },
  cardRoot: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 'auto',
    width: '8rem',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  loginTitle: {
    textAlign: 'center',
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // dispatch redux
  const dispatch = useDispatch();

  // state
  var token = sessionStorage.getItem('token');
  var loginMessage = sessionStorage.getItem('loginMessage');
  

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Card className={classes.cardRoot}>
            <CardContent>
              <Formik
              initialValues={{
                username: '',
                password: ''
              }}
              validationSchema={Yup.object().shape({
                username: Yup.string().max(255).required('Username is required'),
                password: Yup.string().max(255).required('Password is required')
              })}
              onSubmit={(values, actions) => {
                
                dispatch(userSignIn(values))
                  .then(() => {
                    
                    if(token === "") {
                      console.log("a1");
                      console.log(loginMessage);
                    } else {
                      console.log("a2");
                      navigate('/app/dashboard', { replace: true });
                    }
                    
                  }).catch((error) => {
                    console.log(error);
                    console.log("ERROR");
                  })
                
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image="/static/Jepunku_Logo_Fixed-nobg.png"
                    title="Jepunku"
                  />
                  <div className={classes.loginTitle}>
                    <Box mb={3}>
                      <Typography
                        color="textPrimary"
                        variant="h2"
                      >
                        Sign in
                      </Typography>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        Sign in on the Taman Ayun platform v1.0.0
                      </Typography>
                    </Box>
                  </div>
                  
                  <TextField
                    error={Boolean(touched.username && errors.username)}
                    fullWidth
                    helperText={touched.username && errors.username}
                    label="Username"
                    margin="dense"
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="dense"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <Box my={2}>
                    <Button
                      color="primary"
                      fullWidth
                      size="small"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  </Box>
                  
                </form>
              )}
            </Formik>
            </CardContent>
          </Card>
          
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
