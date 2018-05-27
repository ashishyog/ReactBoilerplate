import React, { Component } from 'react';
import { FloatingActionButton, Drawer } from 'material-ui';

export default class SlideDrawer extends Component {
  render() {
    return (
      <div>
        <FloatingActionButton
          label="Drawer"
          //onClick={this.handleToggle}
        />
        <Drawer
          open={false}
          containerStyle={{ position: 'absolute' }}
          overlayStyle={{ position: 'absolute' }}
        />
      </div>
    );
  }
}