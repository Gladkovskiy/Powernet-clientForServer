import React from 'react'
import {Spinner} from 'react-bootstrap'

const SpinnerCenter = () => {
  return (
    <div
      style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}
      className="position-absolute"
    >
      <Spinner animation="grow" variant="dark" />
    </div>
  )
}

export default SpinnerCenter
