import React, {useState} from 'react'
import { Todo } from '../model'

import '../styles/single-todo.scss';
import TodoList from './todoList';
import { Value } from 'sass';


interface Props {
        todo:Todo;
        key: number;
        todos: Todo[];
        setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}








const SingleTodo:React.FC<Props> = ({todo, key, todos, setTodos}) => {

        console.clear();



        // for editing todo: 🟥
        const [edit,setEdit] = useState<boolean>(false);
        const [editTodo, setEditTodo] = useState<string | number>(todo.todo);

        console.log('edit?🟥', edit);





        // done:
        function handleDone(id:number) {
                setTodos(todos.map((todo) => {
                        return todo.id===id ? {...todo, isDone: !todo.isDone}:todo;
                }))
        }



        // delete:
        function handleDelete(id:number) {
                setTodos(todos.filter((item) => {
                        return item.id !== id;
                }));
        }



        // EDIT on SUBMIT: 🟥
        function handleEdit(event:React.FormEvent, id:number) {
                event.preventDefault();
                setEdit(false);

                // set todos with updated value:
                let newTodos:Todo[] = todos.map((todoX) => {
                        if(todoX.id===id){
                               return {...todo, todo: editTodo}
                        }
                        return todo;
                })

                setTodos(newTodos);




        }








        return (<form className='todos__single' onSubmit={(event) => {
                        handleEdit(event,todo.id );

        }}>



{/* done?  */}
                {
                todo.isDone ? (
                        <span className="todos__single__text__done">{todo.todo}</span>

                        ) : (

                                // EDIT🟥
                                edit ? (
                                        <input
                                                type='text'
                                                value={editTodo}
                                                onChange={(event:React.FormEvent) => {
                                                        event.preventDefault();
                                                        setEditTodo((event.target as HTMLInputElement).value);
                                                        console.log('edtiing:🟥', editTodo);
                                        }} />
                                        ) : (

                                                <span className="todos__single__text">{todo.todo}</span>
                                                )

                                                )
                                        }









                                        {/* editing?🟥 */}
{/*
                {edit  && <input type='text' onChange={(event) => {
                                event.preventDefault();
                                setEditTodo((event.target as HTMLInputElement).value);
                        }}
                                value={editTodo}

                        />
                 } */}











                {/* icons: */}
                 <div>


                        {/* EDIT: 🟥*/}
                        <span
                                className='icon'
                                onClick={() => {
                                        if(!edit && !todo.isDone) {
                                        setEdit(!edit);}}}

                        >🖊</span>







                        {/* DELETE: */}
                        <span className='icon' onClick={() => {
                                handleDelete(todo.id);
                        }}>🗑</span>




                        {/* done: */}
                        <span className='icon' onClick={() => {
                                handleDone(todo.id);
                        }}>✅</span>

                 </div>




                 </form>)}

export default SingleTodo