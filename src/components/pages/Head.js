/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React, { useState } from 'react';
import '../styles/Head.css';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { InputAdornment, InputLabel } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import CardActions from '@material-ui/core/CardActions';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 200 + 'px',
    width: 200 + 'px',
  },
}));  

const styles = {
  textField: {
    width: "100%"
  },
  button: {
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  }
};

function Head(props) {
  const classesModal = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
    password: "",
    showPassword: true
  })

  const handleChange = prop => event => {
    setState({ [prop]: event.target.value });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setState({ showPassword: !state.showPassword });
  };

  const { classes }= props;

  return (
    <header>
      <div className="header-top">
        <div>
          <a href="#">NikePlus</a>
        </div>
        <div>
          <a href="#">	</a>
        </div>
        <div>
          <a href="#">Hurley</a>
        </div>		
        <div>
          <a href="#" onClick={handleOpen} >
            Присоединиться / Войти
          </a>
        </div>
        <Modal
            className={classesModal.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500, }}
          >
          <Fade in={open}>
            <div className={classesModal.paper}>
              <TextField
                id="username-input"
                label="Username"
                className={classes.textField}
                type="text"
                margin="normal"
                required
              />
              <FormControl
                className={classes.textField}
              >
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                  id="adornment-password"
                  type={state.showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {state.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )} 
                      </IconButton>
                    </InputAdornment>
                  }
                  required
                />
              </FormControl>
              <CardActions>
                <Button
                  variant="raised"
                  size="large"
                  type="submit"
                  color="primary"
                  className={classes.button}
                >
                  Log In
                </Button>
              </CardActions>
            </div>
          </Fade>
        </Modal>
        <div>
          <a href="#">Помощь</a>
        </div>
        <div className="shop">
          <a href="#"> </a>
        </div>
        <div>
          <a href="#">Россия</a>
        </div>
      </div>

      <div className="header-bottom">
        <div class="logo"></div>
        <div class="header-bottom-main">
          <div class="men">
            <a href="#">МУЖЧИНЫ</a>
          </div>
          <div class="women">
            <a href="#">ЖЕНЩИНЫ</a>
          </div>
          <div class="children">
            <a href="#">ДЕТИ</a>
          </div>
          <div class="design">
            <a href="#">ТВОЙ ДИЗАЙН</a>
          </div>
          <div class="design">
            <a href="#">КОЛЛЕКЦИИ</a>
          </div>
        </div>

        <div class="search">
          <form>
            <div>
              <input type="text" placeholder="Поиск" />
              <button type="submit"></button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

export default withStyles(styles)(Head);