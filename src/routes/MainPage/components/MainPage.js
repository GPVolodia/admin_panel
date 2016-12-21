import React, { PropTypes, Component } from 'react'

class Counter extends Component {
    render() {
        return (
            <div style={{margin: '0 auto'}}>
                Головна сторінка йопта <br />
                <button className='btn btn-default' onClick={this.props.increment}>
                    Increment 21dasdsa
                </button>
                {' '}
                <button className='btn btn-default' onClick={this.props.doubleAsync}>
                    Double (Async)
                </button>
            </div>
        )
    }
}

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Counter
