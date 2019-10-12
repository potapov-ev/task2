/* eslint-disable jsx-a11y/anchor-is-valid */    // href="#"
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import '../styles/Head.css';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { InputAdornment, InputLabel } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
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
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#1565c0',
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

  const [passwordState, setPasswordState] = useState({
    password: "",
    showPassword: true
  })

  const handleChange = prop => event => {
    setPasswordState({ [prop]: event.target.value });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setPasswordState({ showPassword: !passwordState.showPassword });
  };

  const { classes } = props;

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
              <FormControl>
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                  id="adornment-password"
                  type={passwordState.showPassword ? "text" : "password"}
                  value={passwordState.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onBlur={(e) => {e.preventDefault();}}
                      >
                        {passwordState.showPassword ? (
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
              <Button
                variant="raised"
                size="large"
                type="submit"
                className={classes.button}
                onClick={handleClose}
              >
                Log In
              </Button>
            </div>
          </Fade>
        </Modal>
        <div>
          <a href="#">Помощь</a>
        </div>
        <div className="shop">
          <Link to="/Cart" href="#"></Link>
        </div>
        <div>
          <a href="#">Россия</a>
        </div>
      </div>

      <div className="header-bottom">  
        <div class="logo">
          <Link className="goHome" to="/" href="#"></Link>
        </div>
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