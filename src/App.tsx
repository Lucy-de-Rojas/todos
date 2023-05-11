import React, {useState, useEffect} from 'react';
import './styles/App.scss';



import { Todo } from './model';

import InputField from './components/inputField';
import DisplayTodos from './components/displayTodos';










const App:React.FC = () => {

  const [todo, setTodo] = useState<string>('');

  const [todos, setTodos] = useState<Todo[]>([]);











  return (
    <div className="App">
      <span className='heading'>Taskify with sass</span>



      <InputField
            todo={todo}
            setTodo={setTodo}
            todos={todos}
            setTodos={setTodos}
            />



        <DisplayTodos todos={todos}/>



    </div>
  );
}

export default App;
