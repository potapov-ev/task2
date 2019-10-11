import React from 'react';
import '../styles/Item.css';

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from '@material-ui/core/styles';

/* import DeleteIcon from "@material-ui/icons/Delete";
 */

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    color: 'white',
    height: 40,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function Item(props) {
  const { classes } = props;

  return (
    <div className="item">
      <div className="item__img">
        <img src={props.src} alt=''></img>
      </div>
      <div className="item-info">
        <div>
          <span className="item-info__model">{props.model}</span>
          <span className="item-info__price">{props.price}</span>
        </div>
        <div  className="item-info__category">
          <span>{props.category}</span>
          <Button className={classes.root} onClick={ () => {alert(3)}}>
            <AddIcon />
          </Button>        
        </div>
      </div>
    </div>
  )
}
 
export default withStyles(styles)(Item);