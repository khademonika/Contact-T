import React  from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Contacts from './components/Contacts'

export default function App() {


  return (
    <div>
      <Header/>
      <SideBar/>
      <Contacts/>
      <Outlet/>
    </div>
  )
}
