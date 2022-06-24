import React from 'react'
import styles from './Main.module.css'
import Todos from '../../Todos/Todos';
import PlusIcon from '../../../public/static/svg/plus.svg'
import { useRouter } from 'next/router';

const Main = (props) => {
    const router = useRouter();
    // console.log(props.todos);
    // const {todos} = props.todos;
    // console.log(todos);

    const addTodo = () =>{
    console.log('addTodo');
    // add 버튼이 클릭 되었을 때 todo를 추가하는 화면으로 이동하는 코드 작성
    router.push('/todo/add');

  }
  //delete todo
    const deleteTodo = (id) => {
    props.deleteTodo(id);

  }

  return (
    <>
        <div className={styles['todo-header']}>
          <PlusIcon className={styles['new-todo']} onClick={addTodo}/>
          <input className={styles['search-todo']} type="text" placeholder="What needs to be done?" autoFocus/>
        </div>
        <Todos 
          todos={props.todos}
          deleteTodo={deleteTodo}
        />
    </>
    )
}

export default Main