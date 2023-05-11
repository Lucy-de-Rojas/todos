import React from 'react'
import { Todo } from '../model'

import '../styles/displayTodos.scss';


interface Props {
        todos: Todo[];

}







const DisplayTodos = ({todos}:Props) => {
  return (
    <div>
        <h1>To Dos:</h1>


        {todos.map((item) => {
                return <div key={item.id
                }>

                       <span className='todo'>
                        {item.todo}
                        </span>

                        <span className='done'>
                                ✅
                        </span>


                        </div>
        })}

    </div>
  )
}

export default DisplayTodos
