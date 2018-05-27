import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SlideDrawer from '../../components/SlideDrawer';
import Widget from '../../components/Wrapper/Widget'

export default class About extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Tabs>
          <Tab label="CIB" >
            <Tabs>
              <Tab label="Custody">
                <SlideDrawer />
                <Widget />
              </Tab>
              <Tab label="Prime" />
              <Tab label="Trade" />
            </Tabs>
          </Tab>
          <Tab label="CCB" >
            <div>
              Tab 2
            </div>
          </Tab>
          <Tab label="Asset Mang" >
            <div>
              Tab 3
            </div>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}