import React from 'react';
import { any, string } from 'prop-types';
import classnames from 'classnames';
import Header from '../Header';
import styles from './Styles.scss';

export default function Widget(props) {
  const {
    bodyClassName,
    children,
    title,
  } = props;

  return (
    <div>
      <Header
        title={title}
      />
      <div
        className={classnames(styles.body, bodyClassName)}
      >
        {children}
      </div>
    </div>
  );
}


Widget.propTypes = {
  bodyClassName: string,
  children: any,
  title: string,
};

Widget.defaultProps = {
  bodyClassName: '',
  children: undefined,
  title: '',
};