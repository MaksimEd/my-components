import * as React from 'react';
import { 
  ClickAwayListener, 
  Grow, 
  MenuItem, 
  MenuList, 
  Paper, 
  Popper, 
  TextField 
} from '@material-ui/core';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const InputAutoComplete = ({}) => {
  const refInput = React.useRef<HTMLElement>(null);
  const [isOpenMenu, toggleMenuOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  return (
    <div style={{position: 'relative', width: 200}}>
      <TextField
        label="Name"
        inputRef={refInput}
        fullWidth
        // value={this.state.name}
        onChange={e => (setValue(e.target.value.trim().toUpperCase()), toggleMenuOpen(true))}
        margin="normal"
        variant="outlined"
      />
      <Popper open={isOpenMenu} anchorEl={refInput.current} transition disablePortal style={{width: '100%'}}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
          >
            <Paper style={{width: '100%', maxHeight: 200, overflowY: 'auto'}}>
              <ClickAwayListener onClickAway={() => toggleMenuOpen(false)}>
                <MenuList>
                  {options
                    .filter(item => item.toUpperCase().includes(value))
                    .map(item => <MenuItem key={item}>{item}</MenuItem>)}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default InputAutoComplete;