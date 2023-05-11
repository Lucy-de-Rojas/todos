import React, {useRef} from 'react';

import '../styles/inputField.scss';
import { Todo } from '../model';



interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}










const InputField:React.FC<Props> = ({todo, setTodo, todos,setTodos}) => {


  const inputRef = useRef<HTMLInputElement>(null);




  function handleChange(event:React.SyntheticEvent) {
    let value = event.target as HTMLInputElement;
    setTodo(value.value);
  }


  function handleSubmit(event:React.SyntheticEvent) {
    event.preventDefault();
    console.log('submitting', todo);
    if(todo) {


      let data:Todo = {
        todo: todo,
        id: Date.now(),
        isDone: false,
      }


      setTodos([...todos, data]);
      setTodo('');

      inputRef.current?.blur();
    }
  }





  return (
    <form className='input' onSubmit={handleSubmit}>



        <input
        ref={inputRef}
            type="text"
            className='box'
            placeholder='enter task'
            value={todo}
            onChange={handleChange}
            />


        <button type
        ="submit" className='submit'>Go</button>



    </form>
  )
}

export default InputField
