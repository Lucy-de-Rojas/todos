import React from 'react'

import '../styles/inputField.scss';















const InputField = () => {





  return (
    <form className='input'>



        <input type="text" className='box' placeholder='enter task' />


        <button type="submit" className='submit'>Go</button>



    </form>
  )
}

export default InputField
