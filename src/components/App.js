import React,{useState} from "react";
import {connect, useDispatch, useSelector} from 'react-redux';
import {addTodo,removeTodo,doneTodo} from '../actions';

const App = () => {
  const [task, setTask] = useState("")

  const createTask = (e) => { 
        setTask(e.target.value)
      }
  const dispatch = useDispatch()
  const addTask = () => {
    dispatch(addTodo(task))
    setTask('')
  }
  const todolist = useSelector(state => state.todolist.list)
  const removeTask = (index) => {
    dispatch(removeTodo(index))
  }
  const doneTask = (index) => {
    dispatch(doneTodo(index))
  }
  return(
    <React.Fragment>
      <h1>Todo List</h1>
       <input value={task} onChange={createTask} />
       <button onClick={addTask}>追加</button>
       <ul>
          { todolist.map((todo, index) => (
          <li key={ index }>
            {todo.complete ? <del>{ todo.name }</del> : <span>{ todo.name }</span>}
          <button onClick={() => doneTask(index)}>完了</button>
          <button onClick={() => removeTask(index)}>削除</button>
          </li>
         ))}
      </ul>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  todo:state.todolist.list
})

export default connect (mapStateToProps)(App)