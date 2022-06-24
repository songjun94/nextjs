import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react'
import { postTodoAPI } from '../../../lib/api/todo';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const router = useRouter();

  // 각각의 handler 함수 작성
  const titleChangeHandler = (event) => {
     setTitle(event.target.value);
   };
 
   const descChangeHandler = (event) => {
     setDescription(event.target.value);
   }
 
   const dateChangeHandler = (event) => {
     setDueDate(event.target.value);
   }
 
  // addTodo 함수 작성
  const addTodo = () => {
    const data = {
      title,
      description: description,
      date : dueDate,
    }

    postTodoAPI(data);

    router.replace('/');
  }
  return (
    <div>
      <label htmlFor="title">할 일 제목</label>
      <input type="text" id="title" value={title} onChange={titleChangeHandler}/><br/>
      <label htmlFor="description">할 일 내용</label>
      <input type="text" id="description" value={description} onChange={descChangeHandler}/><br/>
      <label htmlFor="due-date">마감 기한</label>
      <input type="date" id="due-date" value={dueDate} onChange={dateChangeHandler}/><br/>
      <button type="button" onClick={addTodo}>추가하기</button>
    </div>
  )
}

export default AddTodo