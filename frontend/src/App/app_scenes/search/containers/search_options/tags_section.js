// import React, { Component } from 'react';
// import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";

// class TagsSection extends Component {

//     render(){
//         return (
//             <div className="w-100 d-inline-block">
//               <h5><strong>Tags</strong></h5>
//                 <MDBSelect>
//                 <MDBSelectInput selected="Choose your option" />
//                     <MDBSelectOptions search>
//                         <MDBSelectOption value="" disabled selected>Choose your country</MDBSelectOption>
//                         <MDBSelectOption value="1">USA</MDBSelectOption>
//                         <MDBSelectOption value="2">Germany</MDBSelectOption>
//                         <MDBSelectOption value="3">France</MDBSelectOption>
//                         <MDBSelectOption value="3">Poland</MDBSelectOption>
//                         <MDBSelectOption value="3">Japan</MDBSelectOption>
//                     </MDBSelectOptions>
//                 </MDBSelect>
//             </div>
//         );
//     }
// }


// export default TagsSection;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class MultipleSelect extends React.Component {
  state = {
    name: [],
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      name: value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.name.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
          >
            {names.map(name => (
              <MenuItem key={name} value={name} >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(null, { withTheme: true })(MultipleSelect);
