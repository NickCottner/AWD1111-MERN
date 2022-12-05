import React, { useState } from 'react'


const form = () => {

    const [inputValue, setInputValue] = useState('')
    const handleInputValueOnChange = (e) =>
    {
        setInputValue(e.target.value)
    }

  return (
    <form className='ui form'>

        <div className='ui grid center aligned'>
            <div className='row'>
                <div className='column six wide'>
                <input 
                value={inputValue}
                onChange={handleInputValueOnChange}
                type='text' 
                placeholder='Add an Item'/>
                </div>
                <div className='column two wide'>
                    <button type='submit' className='ui button'>Add</button>
                </div>
            </div>
            
        </div>
        
    </form>
  )
}

export default form