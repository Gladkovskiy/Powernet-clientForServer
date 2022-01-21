import React from 'react'
import {Helmet} from 'react-helmet-async'

const HelmetComponent = ({title, description}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={description} />
    </Helmet>
  )
}

export default HelmetComponent
