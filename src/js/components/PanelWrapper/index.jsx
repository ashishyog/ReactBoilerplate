import React from 'react';
import { object, string } from 'prop-types';
import Panel from '../Panel';
import styles from './Styles.scss';

const PanelWrapper = (props, OriginalComponent) => {
  const { title, config } = props;
  return (
    <Panel
      title={title}
      className={styles.panel}
      bodyClassName={styles.inner}
    >
      <OriginalComponent {...props} />
    </Panel>
  );
};

PanelWrapper.propTypes = {
  config: object,
  title: string,
};

PanelWrapper.defaultProps = {
  config: undefined,
  title: ''
};

export default PanelWrapper;
