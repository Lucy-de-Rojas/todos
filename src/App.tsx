import React, {useState, useEffect} from 'react';
import './styles/App.scss';



import { Todo } from './model';

import InputField from './components/inputField';
import TodoList from './components/todoList';







const App:React.FC = () => {

  const [todo, setTodo] = useState<string>('');

  const [todos, setTodos] = useState<Todo[]>([]);


  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);










  return (

    <div className="App">
      <span className='heading'>Taskify with sass</span>



      <InputField
            todo={todo}
            setTodo={setTodo}
            todos={todos}
            setTodos={setTodos}
            />



        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}

          />



    </div>

  );
}

export default App;
