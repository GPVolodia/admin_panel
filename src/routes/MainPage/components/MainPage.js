import React from 'react'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    Головна сторінка йопта <br />
    <button className='btn btn-default' onClick={props.increment}>
      Increment 21dasdsa
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Counter
