import React from 'react'
import PropTypes from 'prop-types'

const VARIANTS = {
  primary: 'bg-primary text-gray-900 hover:opacity-95 px-4 py-2 rounded-md',
  secondary: 'bg-secondary text-gray-900 px-4 py-2 rounded-md',
  outline: 'border border-gray-300 text-gray-900 px-4 py-2 rounded-md bg-transparent'
}

export default function Button({children, variant='primary', className, ...props}){
  const cls = `${VARIANTS[variant] || VARIANTS.primary} ${className || ''}`
  return (
    <button className={cls} {...props}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary','secondary','outline']),
  className: PropTypes.string
}
