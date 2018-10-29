import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Button = ({ onClick, children, isActive }) => {
  return (
    <div
      id='custom-button'
      onClick={onClick}
      className={isActive ? 'selected' : null}>
      {children}
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  isActive: PropTypes.bool
}

export default Button
