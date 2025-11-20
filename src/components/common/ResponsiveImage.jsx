import React from 'react'
import PropTypes from 'prop-types'

export default function ResponsiveImage({src, alt, className=''}){
  return (
    <img src={src} alt={alt} className={className} loading="lazy" />
  )
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export const MemoImage = React.memo(ResponsiveImage)
