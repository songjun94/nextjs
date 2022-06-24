import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//localhost:3000/
// next.js에서 index.js 라는 이름의 파일은 특별한 역할을 하는 페이지
//pages/index.js는 메인페이지 역할
export default function Home() {
  return (
   <>
    <div>localhost:3000/ 경로로 실행되는 컴포넌트</div>
    <ul>
      <li>
        <Link href="/todos">Todos</Link>
      </li>
      <li>
      <Link href="/clients">Todos</Link>
      </li>

    </ul>
   </>
  )
}
