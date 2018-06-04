import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import Chart from '../../components/Chart';
import { initializeAbout } from '../../selectors';
import { initAbout } from '../../actions';

class About extends Component {
  static propTypes = {
    config: PropTypes.instanceOf(Object),
    initAbout: func.isRequired,
  };

  componentDidMount() {
    this.props.initAbout();
  }

  render() {
    const {
      chartData,
      title,
    } = this.props.config;

    if (chartData) {
      return (
        <div>
          <Chart
            title={title}
            config={chartData}
          />
        </div>
      );
    }

    return (<div />);
  }
}

export default connect(
  state => ({
    config: initializeAbout(state)
  }), {
    initAbout
  }
)(About);