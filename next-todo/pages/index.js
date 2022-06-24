import Head from 'next/head'
import Footer from '../components/Layout/Footer/Footer';
import Main from '../components/Layout/Main/Main';
import { deleteTodoAPI } from '../lib/api/todo';
import { useState } from 'react';


// 초기 dummy data 테스트용
// const todos = [
//   { id: 1, title: '밥 먹기', description: '밥을 먹는다'},
//   { id: 2, title: '물 마시기', description: '물을 마신다'},
//   { id: 3, title: '운동하기', description: '운동을 한다'},
// ];

const Home =(props) => {
// export default function Home() {
console.log(props); 

const [todos, setTodos] = useState(props.todos);

const deleteTodo =  async (id) => {
  const res = await deleteTodoAPI(id);
  const todos = await res.json();
  setTodos(todos);
}


return (
  <>
    {/*Head 해당 페이지의 메타 정보  */}
    <Head>
      <title>Todo.App</title>
      <meta name ="description" content="Generated by create next app"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Main todos={todos} deleteTodo={deleteTodo}/>
    <Footer/>
  </>
  )
}

//ServerSideProps : next js의 feature
//지속적인 요청이 있을 때마다 서버에 데이터를 새로 요청하는 방식
// getstaticProps : next js의 feature
// 정적인 데이터를 랜더링 할 때 주로 사용
export const getServerSideProps = async () => {
  try {
    const res =  await fetch('http://localhost:8080/api/v1/todos');
    const todos = await res.json();
    // console.log(todos);
    return {
      props: { todos }// 객체는 props라는 이름의 프로퍼티를 가지고 있고,
    //그 프로퍼티 값은 객체
    }

  } catch (error) { // Excepton e와 동일
    console.log(error);
    return {props: {}}
  }
};

export default Home