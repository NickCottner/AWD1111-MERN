import React from 'react'

const list = () => {
  return (
   <div className='ui grid center aligned'>
    <div className='row'>
        <div className='column six wide'>
            <h2>Test ToDo Item</h2>
        </div>
        <div className='column two wide'>
            <button className='ui button'>DELETE</button>
        </div>
    </div>
</div>
  )
}

export default list