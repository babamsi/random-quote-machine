import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Input from '../InputField/InputField';
import Star from '@material-ui/icons/Star';
import Home from '@material-ui/icons/Home';
import Language from '@material-ui/icons/Language';
import Change from '@material-ui/icons/InvertColors';
import Changes from '@material-ui/icons/InvertColorsOff';
import MoreIcon from '@material-ui/icons/MoreVert';
import TemporaryDrawer from '../Drawer/Drawer'
import MenuDrawer from '../Menu/Menu'
import './AppBar.css'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}><p onClick={(event) => {
                      this.props.onLangChange(event.target)
                    }}>{this.props.items[0]}</p>
                    </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
        <p onClick={(event) => {
                      this.props.onLangChange(event.target)
                    }}>{this.props.items[1]}</p>
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            {
              this.props.now === 'Starred' ? <Star /> :
              <Home />
            
            }
          </IconButton>
          {
            this.props.now === 'Starred' ? <p 
            onClick={this.props.saveStarred}>Starred</p> : <p
            onClick={this.props.saveStarred}>Home</p>
          }
        </MenuItem>

        <MenuItem onClick={this.handleProfileMenuOpen}>
        <IconButton color="inherit">
            <Language />
          </IconButton>
          <p>Change Language</p>
        </MenuItem>

        <MenuItem onClick={this.handleMobileMenuClose}>
          
        <IconButton color="inherit">
          
          {
            this.props.dark ? <Change /> : <Changes />
          }
          </IconButton>
          {this.props.dark ? <p onClick={this.props.chaneMode}>Change to Normal Mode</p> : 
            <p onClick={this.props.chaneMode}>Change to Dark Mode</p>}
        </MenuItem>
        
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" > */}
              <TemporaryDrawer 
                saveStarred={this.props.saveStarred}
                now={this.props.now}
                mySelf={this.props.mySelf}
                toProfile={this.props.toProfile}
                onLangChange={this.props.onLangChange}
                items={this.props.items}
                lang={this.props.lang}/>
            {/* </IconButton> */}
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Random Quote Machine
            </Typography>
            <div className={classes.search}>
              {/* <div className={classes.searchIcon}>
                <SearchIcon />
              </div> */}
              <Input
                value={this.props.value}
                onTextChange={this.props.onTextChange}
                disabled={this.props.disabled}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                      <div className="Bar">
                        {
                          this.props.now === 'Starred' ? <Star 
                          style={{width: "40px", height: "100%", cursor: "pointer", margin: "18px 10px 0 10px"}}
                          titleAccess="Starred Quotes"
                          onClick={this.props.saveStarred}/> : <Home 
                          style={{width: "40px", height: "100%", cursor: "pointer", margin: "18px 10px 0 10px"}}
                          titleAccess="Go To Home"
                          onClick={this.props.saveStarred}/>
                        }
                        <MenuDrawer items={this.props.items} onLangChange={this.props.onLangChange}/>
                        {
                          this.props.dark ? <Change
                          style={{width: "40px", height: "100%", cursor: "pointer", margin: "18px 10px 0 10px"}}
                          titleAccess={this.props.dark ? "Change into Normal Mode" : "Change into Dark Mode"}
                          onClick={this.props.chaneMode}/> : 
                          <Changes
                          style={{width: "40px", height: "100%", cursor: "pointer", margin: "18px 10px 0 10px"}}
                          titleAccess={this.props.dark ? "Change into Normal Mode" : "Change into Dark Mode"}
                          onClick={this.props.chaneMode}/>
                        }
                        
                      </div>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);