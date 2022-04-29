import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'
import { useEffect, useMemo, useState } from 'react';




export function App() {
  const wiii = 'aaaaaaaaaa' 
  useEffect(()=>{
    console.log('label', wiii)
  },[wiii])

  return (
    <>
      <Header/>
      <TaskList />
    </>
  )
}