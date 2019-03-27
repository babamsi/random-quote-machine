import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Language from '@material-ui/icons/Language';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    elem: ''
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    
    
  };

  handleClose = (event) => {
    this.setState({ anchorEl: null, elem: event.target.textContent });
    
    
  };

  render() {
    const { anchorEl } = this.state;
    
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
        {
          this.props.join ? <p>Join Us</p>:
          <div style={{width:"50%", height: "100%", cursor: "pointer", margin: "12px 10px 0 10px"}}>
          <Language 
            style={{width: "40px", height: "100%", cursor: "pointer"}}
            titleAccess="Change Language"/>
            </div>
        }
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        {
            this.props.items.map(item => {
                return <MenuItem 
                    onClick={this.handleClose}
                    key={item}><p onClick={(event) => {
                      this.props.onLangChange(event.target)
                    }}>{item}</p></MenuItem>
            })
        }
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;