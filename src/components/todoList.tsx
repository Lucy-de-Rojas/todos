import React from 'react'
import { Todo } from '../model'

import '../styles/todos.scss';

import SingleTodo from './singleTodo';




interface Props {
        todos: Todo[];
        setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}







const TodoList = ({todos, setTodos}:Props) => {
  return (
        <div className="container">

    <div className='todos'>
        <span>Active Tasks:</span>

        {todos.map((todo) => {
                return <div key={todo.id
                }>


        <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos} />
                        </div>
        })}

        </div>  {/* end of todos */}

        <div className="todos remove">
        <span>Completed Tasks:</span>
        {todos.map((todo) => {
                return <div key={todo.id
                }>


        <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos} />
                        </div>
        })}





        </div>



    </div>
  )
}

export default TodoList;
