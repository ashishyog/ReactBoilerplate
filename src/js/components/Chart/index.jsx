import { PureComponent } from 'react';
import ReactHighcharts from 'react-highcharts';
import PanelWrapper from '../PanelWrapper';

export default class Chart extends PureComponent {

  render() {
    return (
      PanelWrapper({ ...this.props }, ReactHighcharts)
    );
  }
}