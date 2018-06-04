/*  https://reactjs.org/docs/typechecking-with-proptypes.html */

import React from 'react';
import { string, any } from 'prop-types';
import style from './Styles.scss';

const Header = ({ title, tools }) => (
  <div className={style.header}>
    <span className={style.text}>{title}</span>
    {tools}
  </div>
);

Header.propTypes = {
  title: string.isRequired,
  tools: any,
};

Header.defaultProps = {
  tools: undefined,
};

export default Header;