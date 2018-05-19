/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
// TODO: Fix the JSX linting errors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { noop } from '../constants';

const classNames = require('classnames');

const NavigationOption = ({
  name,
  icon,
  clickHandler,
  selectable,
  selected,
  url
}) => {
  const optionClass = classNames({
    AppNavigationBar__option: true,
    'AppNavigationBar__option--is-selected': selected,
    'AppNavigationBar__option--is-selectable': selectable,
  });

  return (
    <Link className="col AppNavigationBar__option-col" to={url || '/'} href={url || '/'}>
      <div className={optionClass}>
        <img alt={name} className="AppNavigationBar__option-img" src={icon} />
        <p className="AppNavigationBar__option-text">{name}</p>
      </div>
    </Link>
  );
};

NavigationOption.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  selectable: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
};

NavigationOption.defaultProps = {
  clickHandler: () => noop,
};

export default NavigationOption;
