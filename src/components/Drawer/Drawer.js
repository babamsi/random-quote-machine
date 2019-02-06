import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import Menu from '../Menu/Menu'


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <ListItemText primary={<p onClick={this.props.saveStarred} style={{color: "black", padding: '10px', margin: "10px", textDecoration: "none"}}>{this.props.now}</p>}/>
          </ListItem>

          <ListItem button>
            <ListItemText primary={<Menu items={['English', 'Somali', 'Arabic']}/>}/>
          </ListItem>

          <ListItem button>
            <ListItemText primary={<p onClick={this.props.mySelf} style={{color: "black", padding: '10px', margin: "10px", textDecoration: "none"}}>About Me</p>}/>
          </ListItem>

        </List>
      </div>
    );

    return (
      <div>
        
        <Button onClick={this.toggleDrawer('right', true)}>
             <i className="material-icons Phone">settings</i>
        </Button>
        
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
