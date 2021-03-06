import React from 'react'
import {useSessionStorage} from 'react-use'

const Demo = () => {
  const [value, setValue] = useSessionStorage('my-key', 'foo')

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
    </div>
  )
}

export default Demo
