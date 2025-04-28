import React from 'react'

const Quotes = ({getQuote,Quote}) => {
  return (
    <div className='quote-section'>
      <h1>{Quote }</h1>
       <button type='button' className='btn btn-quote' onClick={getQuote}>Get Quote</button>
    </div>
  )
}

export default Quotes
