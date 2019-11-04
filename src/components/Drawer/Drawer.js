import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '../Menu/Menu'
import menu from '../../assets/Images/menu.png'
import { connect } from 'react-redux'


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
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    
    const authenticated = (
      <React.Fragment>
      <ListItem button>
            <ListItemText primary={<p onClick={this.props.mySelf} style={{color: "black", margin: "10px", textDecoration: "none"}}>Create Your Quote</p>}/>
          </ListItem>
          
        <ListItem button>
          <ListItemText primary={<p onClick={this.props.toProfile} style={{color: "black", margin: "10px", textDecoration: "none"}}>Your Profile</p>}/>
        </ListItem>
        </React.Fragment>
    )
    const sideList = (
      <div >
        <List>
          
          {
            !this.props.auth && <ListItem button>
            <Menu items={['SignIn', 'SignUp']} onLangChange={this.props.onLangChange} join={true}/>
          </ListItem>
          }
          
         
          {this.props.auth && <div>{authenticated}</div>}

          <ListItem button>
            <ListItemText primary={<p onClick={this.props.mySelf} style={{color: "black", margin: "10px", textDecoration: "none"}}>About Me</p>}/>
          </ListItem>

        </List>
      </div>
    );

    return (
      <div>
        
        <div onClick={this.toggleDrawer('left', true)} style={{width: "40%", height: "100%"}}>
            <img src={menu} alt="menu" style={{width: "100%", height: "100%", marginTop: "10%", cursor: "pointer"}}/>
        </div>
        
        <Drawer anchor="left" open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            
            onKeyDown={this.toggleDrawer('left', false)}
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

const mapStateToProps = state => ({
	auth: state.auth.auth
})

export default connect(mapStateToProps)(withStyles(styles)(TemporaryDrawer));
