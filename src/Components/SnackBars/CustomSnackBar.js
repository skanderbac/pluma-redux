// my custom SnackBar
// i use it for erro or success msg display
// on every api call or somthing like that


import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomSnackbar({content,type,open,setter}) {
  const classes = useStyles();

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setter(false);
  };

  return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
        <Alert onClose={handleClose} severity={type} >
          {content}
        </Alert>
       </Snackbar>
      /* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>  */
  );
}